import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

export const AppNavigationContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
