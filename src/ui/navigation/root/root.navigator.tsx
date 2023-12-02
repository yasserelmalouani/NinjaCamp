import React, {useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/home/home.screen';

export const RootNavigator = () => {
  const Stack = useRef(createNativeStackNavigator()).current;

  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  );
};
