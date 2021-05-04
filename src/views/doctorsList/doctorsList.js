import React, {useState, useEffect} from 'react';
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
import firestore from '@react-native-firebase/firestore';

const Item = ({specialty, name, consultationHour, crm, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      navigation.navigate('DoctorDescription', {
        name: name,
        specialty: specialty,
        crm: crm,
        consultationHour: consultationHour,
      });
    }}>
    <View style={styles.informationWrapper}>
      <Text style={styles.doctorName}>{name}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
    </View>
    <View style={styles.dateWrapper}>
      <Icon name="calendar" size={25} color="#00171F" />
      <Text style={styles.consultationHour}>{consultationHour}</Text>
    </View>
  </TouchableOpacity>
);

const DoctorsList = ({navigation, route}) => {
  const [docList, setDocList] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id, docSpecialty} = route.params;

  const ref = firestore()
    .collection('categories')
    .doc(`${id}`)
    .collection('doc' + `${docSpecialty}`);

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {name, specialty, consultationHour, crm} = doc.data();
        list.push({
          id: doc.id,
          name,
          specialty,
          consultationHour,
          crm,
        });
        console.log(list);

        setDocList(list);
        if (loading) {
          setLoading(false);
        }
      });
    });
  }, []);
  const renderItem = ({item}) => (
    <Item
      specialty={item.specialty}
      name={item.name}
      consultationHour={item.consultationHour}
      crm={item.crm}
      navigation={navigation}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={docList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default DoctorsList;
