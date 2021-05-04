import React, {useRef, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {Form} from '@unform/mobile';

import Input from '../../components/inputs/inputs';
import styles from './singUpStyle';
import Btn from '../../components/button/button';
import {useAuth} from '../../context/authContext';

const SingUpView = ({navigation}) => {
  const formRef = useRef(null);
  const {SingUp, currentUser} = useAuth();
  const [disabled, setDisabled] = useState(false);
  const [enableKeyboardView, setKeyboarAvoidView] = useState(false);

  const handleSubmit = data => {
    console.log(data);
    // VERIFICAR ESSE IF
    if (
      (data.singUpEmail ||
        data.singUpPassword ||
        data.singUpPasswordConfirm) === undefined
    ) {
      Alert.alert(
        'Preencha todos os campos!',
        'Nenhum campo pode ficar vazio.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    } else {
      if (data.singUpPassword === data.singUpPasswordConfirm) {
        SingUp(data.singUpEmail, data.singUpPassword, data.singUpName);
        navigation.goBack();
      } else {
        Alert.alert(
          'As senhas estão diferentes!',
          'A senha confirmada não é igual à primeira!',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        );
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.singUpWrapper}
        behavior="position"
        enabled={enableKeyboardView}>
        <Form style={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <View style={styles.inputsWrapper}>
            <Text style={styles.emailText}>Informe seu Nome:</Text>
            <Input
              name={'singUpName'}
              placeholder={'name'}
              placeholderTextColor={'#00171F'}
              onFocus={() => setKeyboarAvoidView(false)}
            />
            <Text style={styles.emailText}>Informe seu Email:</Text>
            <Input
              name={'singUpEmail'}
              placeholder={'Email'}
              placeholderTextColor={'#00171F'}
              onFocus={() => setKeyboarAvoidView(false)}
            />

            <Text style={styles.passwordText}>Informe sua Senha:</Text>
            <Input
              name={'singUpPassword'}
              placeholder={'Senha'}
              placeholderTextColor={'#00171F'}
              onFocus={() => setKeyboarAvoidView(true)}
            />
            <Text style={styles.passwordConfirmText}>Confirme sua senha:</Text>
            <Input
              name={'singUpPasswordConfirm'}
              placeholder={'Confirme sua senha'}
              placeholderTextColor={'#00171F'}
              onFocus={() => setKeyboarAvoidView(true)}
            />
          </View>

          <Btn
            title="ENVIAR"
            color="green"
            disabled={disabled}
            onPress={() => {
              formRef.current.submitForm();
            }}
          />
        </Form>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SingUpView;
