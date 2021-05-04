import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import styles from './doctorDescriptionStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import SmallBtn from '../../components/smallButton/smallButton';
import Btn from '../../components/button/button';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import Modal from 'react-native-modal';
import {useAuth} from '../../context/authContext';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

const DoctorDescription = ({navigation, route}) => {
  const {name, specialty, consultationHour, crm} = route.params;
  const {currentUser} = useAuth();

  console.log('currentuser uid', currentUser.uid);

  const ref = firestore().collection('appointments');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateFormated, setDateFormated] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [flag, setFlag] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const formated = format(date, 'dd/MM/yyyy p');
    setDateFormated(formated);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const checkData = async () => {
    await ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        const dateFirestore = doc.data().date;
        const dateFirestoreJson = JSON.stringify(dateFirestore);
        console.log('JSON 1', dateFirestoreJson);

        // Calculo para igualar ao timestamp do firestore
        const resultDate = new firebase.firestore.Timestamp.fromDate(date);
        const resultDateJson = JSON.stringify(resultDate);
        console.log('JSON 2', resultDateJson);

        if (
          dateFirestoreJson === resultDateJson &&
          doc.data().doctor === name
        ) {
          // evitar dados duplicados no firestore
          console.log('ENTROUUU CERTO');
          setFlag(true);
        }
      });
    });
    addAppointment(flag);
  };

  const addAppointment = async teste => {
    console.log('FLAG', teste);
    if (teste === true) {
      console.log('CONSULTA JA EXISTE');

      // Alert message
      Alert.alert(
        'Já existe consulta nesse horário',
        'Procure um outro horário para consulta',
        [
          {
            text: 'OK',
            onPress: () => {
              setFlag(false);
              console.log('OK Pressed');
            },
          },
        ],
      );
    } else {
      await ref.add({
        doctor: name,
        specialty: specialty,
        uid: currentUser.uid,
        date: date,
      });
      // Alert message
      Alert.alert(
        'Consulta agendada',
        'A consulta agora consta na sua agenda',
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed');
            },
          },
        ],
      );
    }
  };

  useEffect(() => {
    onChange();
  }, [dateFormated]);

  return (
    <View style={styles.container}>
      <View style={styles.appointmentCard}>
        <View style={styles.doctorWrapper}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={require('../../../assets/images/consultapppreto.png')}
          />
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.crm}>CRM: {crm}</Text>
        </View>
        <View style={styles.hourWrapper}>
          <Text style={styles.consultationHour}>
            Horário de atendimento: {consultationHour}
          </Text>

          <SmallBtn onPress={showDatepicker} title="Escolher Dia" />

          <SmallBtn onPress={showTimepicker} title="Escolher Horário" />

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              format="DD/MM/AAAA"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
        <View></View>
        <View style={styles.btnWrapper}>
          <Btn title={'Agendar consulta'} onPress={toggleModal} />
          <Modal isVisible={isModalVisible}>
            <View style={styles.modalWrapper}>
              <Text style={styles.confirmText}>
                Confirme o Horário Agendado:
              </Text>
              <Text style={styles.scheduledTime}>{dateFormated}</Text>

              <View style={styles.confirmBtnWrapper}>
                <SmallBtn
                  title="Cancelar"
                  type={'blue'}
                  onPress={toggleModal}
                />
                <SmallBtn
                  title="Confirmar Agendamento"
                  type={'blue'}
                  onPress={() => {
                    toggleModal();
                    // addAppointment();
                    checkData();
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default DoctorDescription;
