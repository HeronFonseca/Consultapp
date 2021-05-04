import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Files from '../../views/files/files';
import listFiles from '../../views/files/listFiles';

const FilesRoutes = () => {
  const ScheduleStack = createStackNavigator();

  return (
    <ScheduleStack.Navigator
      screenOptions={{
        headerTitleStyle: {alignSelf: 'center'},
        headerStyle: {backgroundColor: '#53C8B0'},
        headerTintColor: '#00171F',
      }}>
      <ScheduleStack.Screen
        name="Arquivos"
        component={Files}
        options={{title: 'Arquivos'}}
      />
      <ScheduleStack.Screen
        name="ListFiles"
        component={listFiles}
        options={{title: 'Arquivos'}}
      />
    </ScheduleStack.Navigator>
  );
};

export default FilesRoutes;
