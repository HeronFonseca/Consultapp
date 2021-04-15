import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './doctorDescriptionStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import Btn from '../../components/button/button';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';

const DoctorDescription = ({navigation, route}) => {
  const {doctorName} = route.params;

  const [isModalVisible, setModalVisible] = useState(false);

  const Data = [
    {label: '14:00-15:00', value: '14:00-15:00'},
    {label: '15:00-16:00', value: '15:00-16:00'},
    {label: '16:00-17:00', value: '16:00-17:00'},
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appointmentCard}>
        <View style={styles.doctorWrapper}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={require('../../../assets/images/consultapppreto.png')}
          />
          <Text style={styles.doctorName}>{doctorName}</Text>
          <Text style={styles.crm}>CRM: 00000000-0/BR</Text>
        </View>
        <View style={styles.dateWrapper}>
          <Text style={styles.consultationHour}>Horário de atendimento:</Text>
        </View>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          placeholderTextColor="red"
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
        />
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
              <Btn
                title={'Ingressar'}
                onPress={() => {
                  toggleModal();
                  navigation.navigate('RoomView');
                }}
              />
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default DoctorDescription;
