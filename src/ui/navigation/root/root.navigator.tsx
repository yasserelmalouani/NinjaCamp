import React, {useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/home/home.screen';
import {DetailsScreen} from '../../screens/details/details.screen';

export const RootNavigator = () => {
  const Stack = useRef(createNativeStackNavigator()).current;

  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName={'Home'}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Details'} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
