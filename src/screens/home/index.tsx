import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to AWS Cognito Authentication App.
      </Text>
    </View>
  );
}

export default Home;

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