import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Schedule from '../../views/schedule/schedule';
import AppointmentData from '../../views/appointmentData/appointmentData';
import CallView from '../../Call/CallView/callView';
import JoinView from '../../Call/JoinView/joinView';
import RoomView from '../../Call/RoomView/roomView';

const ScheduleRoutes = () => {
  const ScheduleStack = createStackNavigator();

  return (
    <ScheduleStack.Navigator
      screenOptions={{
        headerTitleStyle: {alignSelf: 'center'},
        headerStyle: {backgroundColor: '#53C8B0'},
        headerTintColor: '#00171F',
      }}>
      <ScheduleStack.Screen
        name="Schedule"
        component={Schedule}
        options={{title: 'Agenda'}}
      />
      <ScheduleStack.Screen
        name="AppointmentData"
        component={AppointmentData}
        options={{title: 'Consulta Marcada'}}
      />
      <ScheduleStack.Screen
        name="CallView"
        component={CallView}
        options={{headerShown: false}}
      />
      <ScheduleStack.Screen
        name="JoinView"
        component={JoinView}
        options={{headerShown: false}}
      />
      <ScheduleStack.Screen
        name="RoomView"
        component={RoomView}
        options={{title: 'Chamada de Vídeo'}}
      />
    </ScheduleStack.Navigator>
  );
};

export default ScheduleRoutes;
