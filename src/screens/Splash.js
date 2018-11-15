import React from 'react';
import { View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from '../services/firebase';

export class SplashScreen extends React.PureComponent {

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      const routeName = user ? 'App' : 'Auth';
      this.props.navigation.navigate(routeName);
    })
  }

  render() {
    return <View />
  }

}
