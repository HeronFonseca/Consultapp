// Import React in our code
import React, {useState} from 'react';

// Import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import styles from './filesStyle';

// Firebase Storage to upload file
import storage from '@react-native-firebase/storage';
// To pick the file from local file system
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {useAuth} from '../../context/authContext';

const UploadFileScreen = ({navigation}) => {
  const {currentUser} = useAuth();

  // State Defination
  const [loading, setLoading] = useState(false);
  const [filePath, setFilePath] = useState({});
  const [process, setProcess] = useState('');

  const _chooseFile = async () => {
    // Opening Document Picker to select one file
    try {
      const fileDetails = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
      });
      console.log('fileDetails : ' + JSON.stringify(fileDetails));
      // Setting the state for selected File
      setFilePath(fileDetails);
    } catch (error) {
      setFilePath({});
      // If user canceled the document selection
      alert(
        DocumentPicker.isCancel(error)
          ? 'Canceled'
          : 'Unknown Error: ' + JSON.stringify(error),
      );
    }
  };

  // função para permitir o envio do documento para o firebase
  async function getPathForFirebaseStorage(uri) {
    const stat = await RNFetchBlob.fs.stat(uri);
    return stat.path;
  }

  const _uploadFile = async () => {
    try {
      // Check if file selected
      if (Object.keys(filePath).length == 0)
        return alert('Por favor, selecione o arquivo');
      setLoading(true);

      // novo teste
      // const fileUri = await getPathForFirebaseStorage(file.uri);

      //modificando o filepath.uri
      const uploadUri =
        Platform.OS === 'ios'
          ? filePath.uri.replace('file://', '')
          : filePath.uri;
      const fileUri = await getPathForFirebaseStorage(uploadUri);

      // Create Reference
      console.log('Log 1', fileUri);
      console.log('Log 2', filePath.name);
      const reference = storage().ref(
        `${currentUser.uid}/docFiles/${filePath.name}`,
      );

      // Put File
      const task = reference.putFile(fileUri);
      // You can do different operation with task
      // task.pause();
      // task.resume();
      // task.cancel();

      task.on('state_changed', taskSnapshot => {
        setProcess(
          `${taskSnapshot.bytesTransferred} transferred 
           out of ${taskSnapshot.totalBytes}`,
        );
        console.log(
          `${taskSnapshot.bytesTransferred} transferred 
           out of ${taskSnapshot.totalBytes}`,
        );
      });
      task.then(() => {
        alert('O upload da imagem foi concluído');
        setProcess('');
      });
      setFilePath({});
    } catch (error) {
      console.log('Error->', error);
      alert(`Error-> ${error}`);
    }
    setLoading(false);
  };

  const handleNextPage = () => {
    navigation.navigate('ListFiles');
  };

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.titleText}>
              Salve no aplicativo seus aquivos desejados
            </Text>
            <Text style={styles.subtitleText}>
              Escolha o arquivo desejado e faça o upload:
            </Text>
            <View style={styles.container}>
              <Text>{process}</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={_chooseFile}>
                <Text style={styles.buttonTextStyle}>
                  Escolha o arquivo (Arquivos:{' '}
                  {Object.keys(filePath).length == 0 ? 0 : 1})
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={_uploadFile}>
                <Text style={styles.buttonTextStyle}>
                  Faça o upload do arquivo
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.nextPageBtn}
              onPress={handleNextPage}>
              <Text style={styles.buttonTextStyle}>
                Ir para página de arquivos
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default UploadFileScreen;
