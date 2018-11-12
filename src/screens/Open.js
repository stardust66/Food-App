import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Text, AppRegistry, Image, Picker, Button } from 'react-native';
import { LongButton } from '../components/LongButton';
import { Title } from '../components/Title';
import QuickPicker from 'quick-picker';
import DonateFoodScreen from './src/screens/DonateFood';
import FoodPickupScreen from './src/screens/FoodPickup';
import {DrawerNavigator} from 'react-navigation';

export default DrawerNavigator({
  DonateFood: {
    screen: DonateFood
  },
  FoodPickup: {
    screen: FoodPickup
  },
}, {
  drawerWidth: 300
});

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
