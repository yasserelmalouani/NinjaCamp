/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Welcome to NinjaCamp</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
