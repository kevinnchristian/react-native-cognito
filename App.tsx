import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import awsmobile from './src/config/aws-exports';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DrawerNavigation from './src/navigation/drawerNavigation';

//Amplify.configure(awsmobile);

const App = () => {
  return <DrawerNavigation />;
}

// export default withAuthenticator(App);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
