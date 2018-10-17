import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './src/screens/Home';
import { LogInScreen } from './src/screens/LogIn';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  LogIn: {
    screen: LogInScreen
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
