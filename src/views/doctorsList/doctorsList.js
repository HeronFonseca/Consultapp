import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './doctorsListStyle';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    specialty: 'Cardiologista',
    doctorName: 'Dr Drauzio Varella',
    doctorImage: '',
    consultationHour: ['14:00-15:00', '18:00-19:00', '20:00-21:00'],
  },
  {
    id: 'bd7aceea-c1b1-46c2-aed5-3ad53abb28ba',
    specialty: 'Cardiologista',
    doctorName: 'Dr Drauzio Varella',
    doctorImage: '',
    consultationHour: ['14:00-15:00', '18:00-19:00', '20:00-21:00'],
  },
  {
    id: 'bd7acfea-c1b1-46c2-aed5-3ad53abb28ba',
    specialty: 'Cardiologista',
    doctorName: 'Dr Drauzio Varella',
    doctorImage: '',
    consultationHour: ['14:00-15:00', '18:00-19:00', '20:00-21:00'],
  },
];

const renderConsultationHour = consultationHour => {
  consultationHour.map((item, index) => {
    <Text key={index}>{item}</Text>;
    console.log('ITEM', item);
  });
};

const Item = ({
  specialty,
  doctorName,
  consultationHour,
  weekDay,
  navigation,
}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      navigation.navigate('DoctorDescription', {doctorName: doctorName});
    }}>
    <View style={styles.informationWrapper}>
      <Text style={styles.doctorName}>{doctorName}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
    </View>
    <View style={styles.dateWrapper}>
      <Icon name="calendar" size={25} color="#00171F" />
      {renderConsultationHour(consultationHour)}
      <Text style={styles.weekDay}>{weekDay}</Text>
    </View>
  </TouchableOpacity>
);

const Schedule = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      specialty={item.specialty}
      doctorName={item.doctorName}
      consultationHour={item.consultationHour}
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
