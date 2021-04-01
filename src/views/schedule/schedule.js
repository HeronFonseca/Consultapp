import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './scheduleStyle';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    specialty: 'Cardiologista',
    doctorName: 'Dr Drauzio Varella',
    date: '26/08',
    weekDay: 'Quinta-Feira',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    specialty: 'Pediatra',
    doctorName: 'Dr Fulano',
    date: '22/09',
    weekDay: 'Quarta-Feira',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    specialty: 'Ortopedista',
    doctorName: 'Dr Beltrano',
    date: '20/09',
    weekDay: 'Segunda-Feira',
  },
];

const Item = ({specialty, doctorName, date, weekDay, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      navigation.navigate('AppointmentData', {
        specialty: specialty,
        doctorName: doctorName,
        date: date,
        weekDay: weekDay,
      });
    }}>
    <View style={styles.informationWrapper}>
      <Text style={styles.specialty}>{specialty}</Text>
      <Text style={styles.doctorName}>{doctorName}</Text>
    </View>
    <View style={styles.dateWrapper}>
      <Icon name="calendar" size={25} color="#00171F" />
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.weekDay}>{weekDay}</Text>
    </View>
  </TouchableOpacity>
);

const Schedule = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      specialty={item.specialty}
      doctorName={item.doctorName}
      date={item.date}
      weekDay={item.weekDay}
      navigation={navigation}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Schedule;
