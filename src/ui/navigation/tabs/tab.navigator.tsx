import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/home/home.screen';
import {DetailsScreen} from '../../screens/details/details.screen';

export const TabNavigator = () => {
  const Tab = useRef(createBottomTabNavigator()).current;
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Details'} component={DetailsScreen} />
    </Tab.Navigator>
  );
};
