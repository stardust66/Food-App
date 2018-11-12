import React, { Component } from 'react';
import {
  Dimensions, View, StyleSheet, Text, AppRegistry, Image, Picker,
  Button, SafeAreaView
}
from 'react-native';
import { LongButton } from '../components/LongButton';
import { Title } from '../components/Title';
import QuickPicker from 'quick-picker';

const PICTURE_URL = 'https://i0.wp.com/www.episcopalcafe.com/wp-content/uploads/2017/07/St_Pauls_School_-_areial_view_1416901926.jpg?w=431&ssl=1'

export class PickupSelectionScreen extends React.Component {

  render() {
    return (
      <SafeAreaView style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}>
        <Image
          style={{width: 400, height: 250}}
          source={{uri: PICTURE_URL}}
        />
        <Text style={styles.header}>St. Pauls School to Concord Cold Weather Center</Text>
        <Text style={styles.body}>3 miles</Text>
        <Text style={styles.body}>0.5 miles from you</Text>
        <Text style={styles.body}>20 lbs of Pasta and Chicken Parmesan</Text>
        <View>
          <View style={{width: 700, height: 25, backgroundColor: 'white'}} />
        </View>
        <LongButton
            text="Pick Up Now"
            textColor="white"
            backgroundColor='#e60000'
          />
      </SafeAreaView>
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
