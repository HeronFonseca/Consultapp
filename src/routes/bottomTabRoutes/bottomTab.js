import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../../views/home/home';
import Schedule from '../../views/schedule/schedule';
import Files from '../../views/files/files';
import Forms from '../../views/forms/forms';
import Account from '../../views/account/account';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#00171F"
      inactiveColor="#FFFFFF"
      barStyle={{backgroundColor: '#53C8B0'}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: 'home'}} />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
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
}
export default BottomTabs;
