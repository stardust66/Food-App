import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Text, AppRegistry, Image, Picker, Button } from 'react-native';
import { LongButton } from '../components/LongButton';
import { Title } from '../components/Title';
import QuickPicker from 'quick-picker';

export class PickupSelectionforOrgScreen extends React.Component {

  render() {
    return (
      <View style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingTop: 20,
    fontSize: 25,
  },
  body: {
    padding: 17,
    paddingTop: 0.5,
    fontSize: 17,
  },
  button: {
    fontSize: 30,
    paddingTop: 15,
  }
});
