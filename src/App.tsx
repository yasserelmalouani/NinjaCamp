/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppNavigationContainer} from './ui/navigation/appNavigation.container';
import {RootNavigator} from './ui/navigation/root/root.navigator';
import {TabNavigator} from './ui/navigation/tabs/tab.navigator';

function App(): JSX.Element {
  return (
    <AppNavigationContainer>
      {/*<RootNavigator />*/}
      <TabNavigator />
    </AppNavigationContainer>
  );
}

export default App;
