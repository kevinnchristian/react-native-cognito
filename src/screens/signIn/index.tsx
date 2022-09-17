import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Sign In
      </Text>
    </View>
  );
}

export default SignIn;

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