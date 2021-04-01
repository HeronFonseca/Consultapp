import React, {useState} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import styles from './appointmenteDataStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import Btn from '../../components/button/button';
import Modal from 'react-native-modal';
import DocumentPicker from 'react-native-document-picker';

const AppointmentData = ({navigation, route}) => {
  const {specialty, doctorName, date, weekDay} = route.params;

  const [isModalVisible, setModalVisible] = useState(false);
  const [file, setFile] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('RES', res);
      setFile(res);
      console.log('FILE', file);
      Alert.alert('Sucesso!', 'O arquivo selecionado foi enviado', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
        Alert.alert('Cancelado!', 'O arquivo selecionado não foi enviado', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.appointmentCard}>
        <View style={styles.specialtyWrapper}>
          <Text style={styles.specialty}>{specialty}</Text>
        </View>

        <View style={styles.doctorWrapper}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={require('../../../assets/images/consultapppreto.png')}
          />
          <Text style={styles.doctorName}>{doctorName}</Text>
        </View>
        <View style={styles.dateWrapper}>
          <Icon name="calendar" size={50} color="#00171F" />
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.weekDay}>{weekDay}</Text>
        </View>
        <View style={styles.btnWrapper}>
          <Btn
            title={'Anexar Anamnese'}
            type={'blue'}
            onPress={() => {
              selectFile();
            }}
          />
          <Btn title={'Entrar na consulta'} onPress={toggleModal} />
          <Modal isVisible={isModalVisible}>
            <View style={styles.modalWrapper}>
              <Btn title={'Ingressar'} onPress={toggleModal} />
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default AppointmentData;
