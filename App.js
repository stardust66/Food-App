import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './src/screens/Home';
import { LogInScreen } from './src/screens/LogIn';
import { SignUpScreen } from './src/screens/SignUp';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  LogIn: {
    screen: LogInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
