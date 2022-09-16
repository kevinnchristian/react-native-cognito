import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import awsmobile from './src/config/aws-exports';

Amplify.configure(awsmobile);

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Você está autenticado.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
