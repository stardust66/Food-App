import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { WelcomeScreen } from './src/screens/Welcome';
import { LogInScreen } from './src/screens/LogIn';
import { SignUpScreen } from './src/screens/SignUp';
import { DonateFoodScreen } from './src/screens/DonateFood';
import { FoodPickupScreen } from './src/screens/FoodPickup';
import { PickupSelectionScreen } from './src/screens/PickupSelection';
import { PickupSelectionforOrgScreen } from './src/screens/PickupSelectionforOrg';

const RootStack = createStackNavigator({
  PickupSeclectionforOrg: {
    screen: PickupSelectionforOrgScreen
  },
  PickupSelection: {
    screen: PickupSelectionScreen
  },
  FoodPickup: {
    screen: FoodPickupScreen
  },
  DonateFood: {
    screen: DonateFoodScreen
  },
  Welcome: {
    screen: WelcomeScreen
  },
  LogIn: {
    screen: LogInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
}, {
  initialRouteName: 'Welcome'
});

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
