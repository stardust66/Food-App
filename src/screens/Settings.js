import React from 'react';
import { View, SafeAreaView, Button } from 'react-native';
import { Title } from '../components/Title';
import { LongButton } from '../components/LongButton';
import { DrawerButton } from '../components/DrawerButton';
import { commonStyles } from '../services/styles';
import firebase from 'firebase';

export class SettingsScreen extends React.PureComponent {

  signOut = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerButton />
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Title style={commonStyles.title}>Settings</Title>
          <LongButton
            textColor='white'
            backgroundColor='#ff2400'
            text='Sign Out'
            onPress={this.signOut}
          />
        </View>
      </SafeAreaView>
    );
  }

}
