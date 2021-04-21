import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Image, Button} from 'react-native';
import styles from './doctorDescriptionStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import SmallBtn from '../../components/smallButton/smallButton';
import Btn from '../../components/button/button';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import Modal from 'react-native-modal';

const DoctorDescription = ({navigation, route}) => {
  const {doctorName} = route.params;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateFormated, setDateFormated] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

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
          <Text style={styles.doctorName}>{doctorName}</Text>
          <Text style={styles.crm}>CRM: 00000000-0/BR</Text>
        </View>
        <View style={styles.hourWrapper}>
          <Text style={styles.consultationHour}>Horário de atendimento:</Text>

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
                  onPress={toggleModal}
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
