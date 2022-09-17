import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const IsAuth = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Authenticated User
      </Text>
    </View>
  )
}

export default IsAuth;

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