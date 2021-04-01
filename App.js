import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HandleRoutes from './src/routes/handleRoutes/handleRoutes';
import AuthProvider from './src/context/authContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <HandleRoutes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
