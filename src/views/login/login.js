import React, {useRef, useState} from 'react';
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
//import validateEmail from '../../api/validationApi/validateEmail';

import {Form} from '@unform/mobile';

const Login = () => {
  const formRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState('');

  // Email check function
  const checkEmail = data => {
    // let valid = validateEmail(data.email);
    // if (valid[0]) {
    //   setErrorMessage('');
    // } else {
    //   setErrorMessage(valid[1]);
    // }
  };

  // Form function
  const handleSubmit = async data => {
    // checkEmail(data);
    // const email = data.email;
    // const password = data.password;
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
                placeholderTextColor={'#6E6E6E'}
              />
              <Input
                name="password"
                placeholder="Digite sua senha"
                placeholderTextColor={'#6E6E6E'}
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
              <TouchableOpacity onPress={() => {}}>
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
