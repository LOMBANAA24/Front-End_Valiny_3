//navigations/stacknavigation.js

import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stack/AuthStack';
import MainStack from './stack/MainStack';
import { AuthContext } from '../context/AuthContext';

const StackNavigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default StackNavigation;
