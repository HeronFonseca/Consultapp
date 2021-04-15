import React from 'react';

import AppRoutes from '../appRoutes';
import LoginRoutes from '../loginRoutes';
import {useAuth} from '../../context/authContext';

const HandleRoutes = () => {
  const {currentUser} = useAuth();

  return currentUser ? <AppRoutes /> : <LoginRoutes />;
};

export default HandleRoutes;
