import React from 'react';

import HomeRoutes from '../homeRoutes';
import LoginRoutes from '../loginRoutes';
import {useAuth} from '../../context/authContext';

const HandleRoutes = () => {
  const {currentUser} = useAuth();

  return currentUser ? <HomeRoutes /> : <LoginRoutes />;
};

export default HandleRoutes;
