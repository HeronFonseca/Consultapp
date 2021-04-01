import React, {useRef, useState, useEffect} from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import styles from './loginStyle';
import Btn from '../../components/button/button';
import Input from '../../components/inputs/inputs';
import validateEmail from '../../api/validationApi/validateEmail';
import {useAuth} from '../../context/authContext';

import {Form} from '@unform/mobile';

const Login = ({navigation}) => {
  const formRef = useRef(null);
  const {LoginAuth, currentUser} = useAuth();

  const [errorMessage, setErrorMessage] = useState('');

  // Email check function
  const checkEmail = data => {
    console.log(data);
    let valid = validateEmail(data.email);
    if (valid[0]) {
      setErrorMessage('');
      LoginAuth(data.email, data.password);
    } else {
      setErrorMessage(valid[1]);
    }
  };

  // Form function
  const handleSubmit = async data => {
    checkEmail(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.loginContainer}>
        <KeyboardAvoidingView behavior={'position'}>
          <View style={styles.loginContainerInner}>
            <Image
              source={require('../../../assets/images/consultappbranco.png')}
              style={styles.loginImage}
            />

            <Text style={styles.logLabel}>Login</Text>
            <Form ref={formRef} onSubmit={handleSubmit}>
              {errorMessage !== '' && (
                <Text style={styles.errorMessageLabel}>{errorMessage}</Text>
              )}
              <Input
                name="email"
                placeholder="Digite seu e-mail"
                placeholderTextColor={'#00171F'}
              />
              <Input
                name="password"
                placeholder="Digite sua senha"
                placeholderTextColor={'#00171F'}
                secureTextEntry={true}
              />
              <View style={styles.forgotPasswordWrapper}>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.forgotPasswordLabel}>
                    Esqueceu sua senha?
                  </Text>
                </TouchableOpacity>
              </View>

              <Btn
                title="ENTRAR"
                color="green"
                onPress={() => {
                  formRef.current.submitForm();
                }}
              />
            </Form>
            <View style={styles.singUpWrapper}>
              <Text style={styles.createAccountLabel}>Não tem uma conta?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SingUp');
                }}>
                <Text style={styles.singUpText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
