import React from 'react';
import {
  createDrawerNavigator, createStackNavigator, createSwitchNavigator,
  StackActions, NavigationActions
} from 'react-navigation';
import { WelcomeScreen } from './src/screens/Welcome';
import { LogInScreen } from './src/screens/LogIn';
import { SignUpScreen } from './src/screens/SignUp';
import { DonateFoodScreen } from './src/screens/DonateFood';
import { FoodPickupScreen } from './src/screens/FoodPickup';
import { PickupSelectionScreen } from './src/screens/PickupSelection';
import { PickupSelectionforOrgScreen } from './src/screens/PickupSelectionforOrg';
import { DashboardScreen } from './src/screens/Dashboard';
import { SplashScreen } from './src/screens/Splash';
import { SettingsScreen } from './src/screens/Settings';
import firebase from './src/services/firebase';

const AppStack = createDrawerNavigator({
  Dashboard: DashboardScreen,
  Settings: SettingsScreen
}, {
  initialRouteName: 'Dashboard'
});

const AuthStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  LogIn: {
    screen: LogInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
})

const Switcher = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppStack,
  Auth: AuthStack
}, {
  initialRouteName: 'Splash'
})

export default App = (props) => (
  <Switcher />
);
