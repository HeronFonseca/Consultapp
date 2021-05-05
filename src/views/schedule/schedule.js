import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './scheduleStyle';
import {useAuth} from '../../context/authContext';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';
import {format} from 'date-fns';

const Item = ({specialty, doctor, formatedDate, scheduleId, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      navigation.navigate('AppointmentData', {
        specialty: specialty,
        doctor: doctor,
        formatedDate: formatedDate,
        scheduleId: scheduleId,
      });
    }}>
    <View style={styles.informationWrapper}>
      <Text style={styles.specialty}>{specialty}</Text>
      <Text style={styles.doctorName}>{doctor}</Text>
    </View>
    <View style={styles.dateWrapper}>
      <Icon name="calendar" size={25} color="#00171F" />
      <Text style={styles.date}>{formatedDate}</Text>
    </View>
  </TouchableOpacity>
);

const Schedule = ({navigation}) => {
  const [scheduleList, setScheduleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState(true);

  const {currentUser} = useAuth();
  const ref = firestore().collection('appointments');

  const renderItem = ({item}) => (
    <Item
      specialty={item.specialty}
      doctor={item.doctor}
      formatedDate={item.formatedDate}
      navigation={navigation}
      scheduleId={item.id}
    />
  );

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const firestoreDate = doc.data().date;

        // COnverte a data do timestamp em uma data mais legível
        const resultDate = new Date(
          firestoreDate.seconds * 1000 + firestoreDate.nanoseconds / 1000000,
        );

        // Converte em uma data legível para as pessoas
        const formatedDate = format(resultDate, 'dd/MM/yyyy p');

        //Verifica se os dados pertecem ao usuário
        console.log('AQQQQQQQQ', doc.data().doctor);
        if (
          doc.data().uid === currentUser.uid ||
          doc.data().doctor === currentUser.displayName
        ) {
          const {doctor, specialty, uid} = doc.data();
          list.push({
            id: doc.id,
            doctor,
            specialty,
            uid,
            formatedDate,
          });
          console.log('LIIST', list);
          setScheduleList(list);
        }

        //Verifica se existe alguma consulta
        if (list && list.length > 0) {
          setSchedule(true);
        } else {
          setSchedule(false);
        }
        if (loading) {
          setLoading(false);
        }
      });
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {console.log('SCHEDULE', schedule)}
      {schedule && (
        <FlatList
          data={scheduleList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
      {!schedule && <Text style={styles.informative}>Sem Consultas</Text>}
    </SafeAreaView>
  );
};

export default Schedule;
