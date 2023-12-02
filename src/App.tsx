/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppNavigationContainer} from './ui/navigation/appNavigation.container';
import {RootNavigator} from './ui/navigation/root/root.navigator';

function App(): JSX.Element {
  return (
    <AppNavigationContainer>
      <RootNavigator />
    </AppNavigationContainer>
  );
}

export default App;
