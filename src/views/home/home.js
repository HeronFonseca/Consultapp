import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './homeStyle';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    specialty: 'Cardiologista',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    specialty: 'Pediatra',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    specialty: 'Ortopedista',
  },
  {
    id: '58694a0f-3da1-471f-bd94-145571e29d72',
    specialty: 'Ginecologia e Obstetrícia',
  },
  {
    id: '58694a0f-3da1-491f-bd96-145571e29d72',
    specialty: 'Clínica Geral',
  },
  {
    id: '58694a0f-3da1-471d-bd96-145571e29d72',
    specialty: 'Dermatologia',
  },
  {
    id: '58694b0f-3da1-471d-bd96-145571e29d72',
    specialty: 'Psiquiatria',
  },
];

const Item = ({specialty, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      navigation.navigate('DoctorsList', {
        specialty: specialty,
      });
    }}>
    <View style={styles.informationWrapper}>
      <Text style={styles.specialty}>{specialty}</Text>
    </View>
  </TouchableOpacity>
);

const Home = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item specialty={item.specialty} navigation={navigation} />
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

export default Home;
