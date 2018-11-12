import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions, TextInput,
  Picker
} from 'react-native';
import { LongButton } from '../components/LongButton';
import { Title } from '../components/Title';
import QuickPicker from 'quick-picker';

export class FoodPickupScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}>
        <Text style={styles.header}>Pick Up Food</Text>
        <LongButton
            text="20 lbs delivery from St. Paul's School to Concord Cold Weather Center               3 mi | 0.5 mi from you"
            textColor="white"
            backgroundColor='#e60000'
          />
        <LongButton
            text="# lbs delivery from location to location          # mi | # mi from you"
            textColor="white"
            backgroundColor='#ff1a1a'
          />
        <LongButton
            text="# lbs delivery from location to location          # mi | # mi from you"
            textColor="white"
            backgroundColor='#ff4d4d'
          />
        <LongButton
            text="# lbs delivery from location to location          # mi | # mi from you"
            textColor="white"
            backgroundColor='#ff8080'
          />
          <LongButton
              text="# lbs delivery from location to location          # mi | # mi from you"
              textColor="white"
              backgroundColor='#ffb3b3'
          />
      </SafeAreaView>
     );
   }
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingTop: 20,
    fontSize: 30,
  },
  body: {
    padding: 17,
    paddingTop: 10,
    fontSize: 20,
  },
  input: {
    height: 20,
    fontSize: 17,
    padding: 17,
    paddingTop: 0.1,
    color: 'black',
    height: 35,
  },
  button: {
    fontSize: 30,
    paddingTop: 15,
  }
});
