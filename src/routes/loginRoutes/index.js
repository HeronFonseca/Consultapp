import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../views/login/login';
import SingUp from '../../views/singUp/singUp';

const Stack = createStackNavigator();

const LoginRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {alignSelf: 'center'},
        headerStyle: {backgroundColor: '#53C8B0'},
        headerTintColor: '#00171F',
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{headerShown: true, title: 'Cadastrar'}}
      />
    </Stack.Navigator>
  );
};

export default LoginRoutes;
