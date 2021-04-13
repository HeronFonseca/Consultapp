import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

import {
  RTCPeerConnection,
  RTCView,
  mediaDevices,
  RTCIceCandidate,
  RTCSessionDescription,
} from 'react-native-webrtc';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

import styles from './callViewStyle';
import SmallBtn from '../../components/smallButton/smallButton';

const app = firebase.app();
const db = app.firestore();

const configuration = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

export default function CallView({navigation, route}) {
  const {roomId} = route.params;
  console.log('ROOOM CALL', roomId);

  function onBackPress() {
    if (cachedLocalPC) {
      cachedLocalPC.removeStream(localStream);
      cachedLocalPC.close();
    }
    setLocalStream();
    setRemoteStream();
    setCachedLocalPC();
    // cleanup
    //setScreen(screens.ROOM);
    navigation.goBack();
  }

  const [localStream, setLocalStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [cachedLocalPC, setCachedLocalPC] = useState();

  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // startLocalStream();
  }, []);

  const startLocalStream = async () => {
    // isFront will determine if the initial camera should face user or environment
    const isFront = true;
    const devices = await mediaDevices.enumerateDevices();

    const facing = isFront ? 'front' : 'environment';
    const videoSourceId = devices.find(
      device => device.kind === 'videoinput' && device.facing === facing,
    );
    const facingMode = isFront ? 'user' : 'environment';
    const constraints = {
      audio: true,
      video: {
        mandatory: {
          minWidth: 800, // Provide your own width, height and frame rate here
          minHeight: 300,
          minFrameRate: 30,
        },
        facingMode,
        optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
      },
    };
    const newStream = await mediaDevices.getUserMedia(constraints);
    setLocalStream(newStream);
  };

  const startCall = async id => {
    // Salva o peer connection, que será a stream a ser utilizada
    const localPC = new RTCPeerConnection(configuration);
    localPC.addStream(localStream);

    // Salva a referencia do room a ser utilizado na conexão
    const roomRef = await db.collection('rooms').doc(id);
    const callerCandidatesCollection = roomRef.collection('callerCandidates');

    // escuta o onIceCandidate acionado na peer connection
    localPC.onicecandidate = e => {
      if (!e.candidate) {
        console.log('Got final candidate!');
        return;
      }
      // adiciona o new iceCandidate
      callerCandidatesCollection.add(e.candidate.toJSON());
    };

    // pega o stream do callee e seta no RTCView
    localPC.onaddstream = e => {
      if (e.stream && remoteStream !== e.stream) {
        console.log('RemotePC received the stream call', e.stream);
        setRemoteStream(e.stream);
      }
    };

    // Gera a oferta em envia para o peer connection
    const offer = await localPC.createOffer();
    await localPC.setLocalDescription(offer);

    // Seta o valor do roomRef no firebase com a oferta
    const roomWithOffer = {offer};
    await roomRef.set(roomWithOffer);

    // Checa se tem alguma respota compatível com a roomRef, se sim a resposta é setada no remoteDescription
    roomRef.onSnapshot(async snapshot => {
      const data = snapshot.data();
      if (!localPC.currentRemoteDescription && data.answer) {
        const rtcSessionDescription = new RTCSessionDescription(data.answer);
        await localPC.setRemoteDescription(rtcSessionDescription);
      }
    });

    // Escuta os calleeCandidates e checa se tem novos iceCandidates adicionados pelo Callee
    roomRef.collection('calleeCandidates').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(async change => {
        if (change.type === 'added') {
          let data = change.doc.data();
          await localPC.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });

    setCachedLocalPC(localPC);
  };

  // Muda o lado da camera a ser utilizada
  const switchCamera = () => {
    localStream.getVideoTracks().forEach(track => track._switchCamera());
  };

  // Muta o microfone do client
  const toggleMute = () => {
    if (!remoteStream) {
      return;
    }
    localStream.getAudioTracks().forEach(track => {
      // console.log(track.enabled ? 'muting' : 'unmuting', ' local track', track);
      track.enabled = !track.enabled;
      setIsMuted(!track.enabled);
    });
  };

  return (
    <>
      <Text style={styles.heading}>Tela de Chamada</Text>
      <Text style={styles.heading}>ID chamada : {roomId}</Text>

      <View style={styles.callButtons}>
        <View styles={styles.buttonContainer}>
          <SmallBtn title="Encerrar Chamada" onPress={onBackPress} />
        </View>
        <View styles={styles.buttonContainer}>
          {!localStream && (
            <SmallBtn title="Abrir Câmera" onPress={startLocalStream} />
          )}
          {localStream && (
            <SmallBtn
              title="Iniciar Chamada"
              onPress={() => startCall(roomId)}
              disabled={!!remoteStream}
            />
          )}
        </View>
      </View>

      {localStream && (
        <View style={styles.toggleButtons}>
          <SmallBtn title="Virar Câmera" onPress={switchCamera} />
          <SmallBtn
            title={`${isMuted ? 'Desmutar' : 'Mutar'} Chamada`}
            onPress={toggleMute}
            disabled={!remoteStream}
          />
        </View>
      )}

      <View style={{display: 'flex', flex: 1, padding: 10}}>
        <View style={styles.rtcview}>
          {localStream && (
            <RTCView
              style={styles.rtc}
              streamURL={localStream && localStream.toURL()}
            />
          )}
        </View>
        <View style={styles.rtcview}>
          {remoteStream && (
            <RTCView
              style={styles.rtc}
              streamURL={remoteStream && remoteStream.toURL()}
            />
          )}
        </View>
      </View>
    </>
  );
}
