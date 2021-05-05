import React, {useState} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import styles from './appointmenteDataStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import Btn from '../../components/button/button';

const AppointmentData = ({navigation, route}) => {
  const {specialty, doctor, formatedDate, scheduleId} = route.params;

  console.log('IDDDD', scheduleId);

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
          <Text style={styles.doctorName}>{doctor}</Text>
        </View>
        <View style={styles.dateWrapper}>
          <Icon name="calendar" size={50} color="#00171F" />
          <Text style={styles.date}>{formatedDate}</Text>
        </View>
        <View style={styles.idTextWrapper}>
          <Text style={styles.idTitle}>ID da Chamada</Text>
          <Text style={styles.idSubtitle}>
            Utilize o ID abaixo para entrar na consulta com seu médico:
          </Text>
          <Text style={styles.idText}>{scheduleId.substring(0, 9)}</Text>
        </View>
        <View style={styles.btnWrapper}>
          <Btn
            title={'Entrar na consulta'}
            onPress={() => {
              navigation.navigate('RoomView');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AppointmentData;
