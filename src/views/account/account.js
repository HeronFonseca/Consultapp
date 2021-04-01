import React from 'react';
import {Text, View} from 'react-native';
import Btn from '../../components/button/button';
import {useAuth} from '../../context/authContext';

const Account = () => {
  const {LogOut} = useAuth();
  return (
    <View>
      <Text>Account Page</Text>
      <Btn
        title={'LOGOUT'}
        onPress={() => {
          LogOut();
        }}
      />
    </View>
  );
};

export default Account;
