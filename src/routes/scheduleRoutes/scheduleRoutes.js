import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Schedule from '../../views/schedule/schedule';
import AppointmentData from '../../views/appointmentData/appointmentData';

const ScheduleRoutes = () => {
  const ScheduleStack = createStackNavigator();

  return (
    <ScheduleStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#53C8B0'},
        headerTintColor: '#00171F',
      }}>
      <ScheduleStack.Screen
        name="Schedule"
        component={Schedule}
        options={{headerShown: false}}
      />
      <ScheduleStack.Screen
        name="AppointmentData"
        component={AppointmentData}
        options={{title: 'Consulta Marcada'}}
      />
    </ScheduleStack.Navigator>
  );
};

export default ScheduleRoutes;
