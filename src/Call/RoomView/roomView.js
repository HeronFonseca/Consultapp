import React, {useState} from 'react';
import {Text, StyleSheet, Button, View, TextInput} from 'react-native';

import styles from './roomViewStyle';
import Btn from '../../components/button/button';

export default function RoomScreen({navigation}) {
  const [roomId, setRoomId] = useState('');
  return (
    <>
      <Text style={styles.heading}>Entre com o ID da chamada</Text>
      <TextInput style={styles.input} value={roomId} onChangeText={setRoomId} />
      <View style={styles.buttonContainer}>
        <Btn
          type="blue"
          title="Entrar na chamada"
          onPress={() => navigation.navigate('JoinView', {roomId: roomId})}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Btn
          type="blue"
          title="Realizar chamada"
          onPress={() => navigation.navigate('CallView', {roomId: roomId})}
        />
      </View>
    </>
  );
}
