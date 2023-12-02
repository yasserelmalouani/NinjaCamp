import React from 'react';
import {SafeAreaView, Text} from 'react-native';

type Props = {};

export const HomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to NinjaCamp</Text>
    </SafeAreaView>
  );
};
