import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './src/screens/Home';
import { LogInScreen } from './src/screens/LogIn';
import { SignUpScreen } from './src/screens/SignUp';
import { DashboardScreen } from './src/screens/DonateFood';
import { DonateFoodScreen } from './src/screens/DonateFood';

const RootStack = createStackNavigator({
  DonateFood: {
    screen: DonateFoodScreen
  },
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
