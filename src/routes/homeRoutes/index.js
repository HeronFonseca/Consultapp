import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../views/home/home';
import DoctorsList from '../../views/doctorsList/doctorsList';
import DoctorDescription from '../../views/doctorDescription/doctorDescription';

const HomeRoutes = () => {
  const ScheduleStack = createStackNavigator();

  return (
    <ScheduleStack.Navigator
      screenOptions={{
        headerTitleStyle: {alignSelf: 'center'},
        headerStyle: {backgroundColor: '#53C8B0'},
        headerTintColor: '#00171F',
      }}>
      <ScheduleStack.Screen
        name="Home"
        component={Home}
        options={{title: 'Escolha a especialidade desejada'}}
      />
      <ScheduleStack.Screen
        name="DoctorsList"
        component={DoctorsList}
        options={{title: 'Escolha o seu Médico'}}
      />
      <ScheduleStack.Screen
        name="DoctorDescription"
        component={DoctorDescription}
        options={{title: 'Informações do Médico'}}
      />
    </ScheduleStack.Navigator>
  );
};

export default HomeRoutes;
