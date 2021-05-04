import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import ScheduleRoutes from '../scheduleRoutes/scheduleRoutes';
import HomeRoutes from '../homeRoutes';
import Profile from '../../views/profile/profile';
import FilesRoutes from '../../routes/filesRoutes';

import Files from '../../views/files/files';

const Tab = createMaterialBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeRoutes"
      activeColor="#00171F"
      inactiveColor="#FFFFFF"
      barStyle={{backgroundColor: '#53C8B0'}}>
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{tabBarIcon: 'home'}}
      />
      <Tab.Screen
        name="Agenda"
        component={ScheduleRoutes}
        options={{tabBarIcon: 'calendar-month'}}
      />
      <Tab.Screen
        name="Arquivos"
        component={FilesRoutes}
        options={{tabBarIcon: 'folder-open'}}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{tabBarIcon: 'account'}}
      />
    </Tab.Navigator>
  );
};
export default AppRoutes;
