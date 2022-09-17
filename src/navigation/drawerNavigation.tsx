import {
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/home';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import GoogleAuth from '../screens/googleAuth';

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
      >
        <Drawer.Screen
          name='Home'
          component={Home}
        />

        <Drawer.Screen
          name='Sing In'
          component={SignIn}
        />

        <Drawer.Screen
          name='Sing Up'
          component={SignUp}
        />

        <Drawer.Screen
          name='Google Auth'
          component={GoogleAuth}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}