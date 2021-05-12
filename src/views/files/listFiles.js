import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Linking,
} from 'react-native';

import storage from '@react-native-firebase/storage';
import {useAuth} from '../../context/authContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './listFilesStyle';

const FilesListingScreen = () => {
  const {currentUser} = useAuth();

  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listFilesAndDirectories('');
  }, []);

  const listFilesAndDirectories = pageToken => {
    console.log('HEREEE', pageToken);
    const reference = storage().ref(`${currentUser.uid}/docFiles`);
    reference.list({pageToken}).then(result => {
      result.items.forEach(ref => {
        console.log('ref  ->>  ', JSON.stringify(ref));
      });

      if (result.nextPageToken) {
        return listFilesAndDirectories(reference, result.nextPageToken);
      }
      setListData(result.items);
      setLoading(false);
    });
  };

  const ItemView = ({item}) => {
    console.log('ITEEEM', item);
    return (
      <View style={{padding: 10}}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => getItem(item.fullPath)}>
          <Text style={styles.itemText}>Nome do Arquivo: </Text>
          <Text style={styles.itemName}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = async fullPath => {
    const url = await storage()
      .ref(fullPath)
      .getDownloadURL()
      .catch(e => {
        console.error(e);
      });
    Linking.openURL(url);
    console.log(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>LISTA DE ARQUIVOS</Text>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={listData}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default FilesListingScreen;
