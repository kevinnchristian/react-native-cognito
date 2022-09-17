import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const GoogleAuth = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Google Auth
      </Text>
    </View>
  );
}

export default GoogleAuth;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#F4F4F6',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 18,
  }
});