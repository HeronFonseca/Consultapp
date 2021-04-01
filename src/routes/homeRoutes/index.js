import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import ScheduleRoutes from '../scheduleRoutes/scheduleRoutes';

import Home from '../../views/home/home';
import Files from '../../views/files/files';
import Forms from '../../views/forms/forms';
import Account from '../../views/account/account';

const Tab = createMaterialBottomTabNavigator();

const HomeRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#00171F"
      inactiveColor="#FFFFFF"
      barStyle={{backgroundColor: '#53C8B0'}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: 'home'}} />
      <Tab.Screen
        name="ScheduleRoutes"
        component={ScheduleRoutes}
        options={{tabBarIcon: 'calendar-month'}}
      />
      <Tab.Screen
        name="Files"
        component={Files}
        options={{tabBarIcon: 'folder-open'}}
      />
      <Tab.Screen
        name="Forms"
        component={Forms}
        options={{tabBarIcon: 'file-pdf'}}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{tabBarIcon: 'account'}}
      />
    </Tab.Navigator>
  );
};
export default HomeRoutes;
