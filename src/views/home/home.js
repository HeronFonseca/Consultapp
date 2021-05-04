import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './homeStyle';
import firestore from '@react-native-firebase/firestore';

const Item = ({specialty, id, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      navigation.navigate('DoctorsList', {
        id: id,
        docSpecialty: specialty,
      });
    }}>
    <View style={styles.informationWrapper}>
      <Text style={styles.specialty}>{specialty}</Text>
    </View>
  </TouchableOpacity>
);

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const ref = firestore().collection('categories');

  const renderItem = ({item}) => (
    <Item specialty={item.title} id={item.id} navigation={navigation} />
  );
  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {title} = doc.data();
        list.push({
          id: doc.id,
          title,
        });
      });

      setCategories(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
