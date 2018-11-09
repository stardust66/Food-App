import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions, TextInput,
  Picker
} from 'react-native';
import { LongButton } from '../components/LongButton';
import { Title } from '../components/Title';

export class DonateFoodScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}>
        <Text style={styles.header}>Donate Now</Text>
        <View>
          <View style={{width: 700, height: 7, backgroundColor: 'powderblue'}} />
        </View>
        <Text style={styles.body}>Food Type</Text>
        <Text style={styles.body}>Food Description</Text>
        <TextInput
          style={styles.input}
          placeholder="E.g. Fried Chicken, Goldfish"
        />
        <Text style={styles.body}>Estimated Weight</Text>
        <TextInput
          style={styles.input}
          placeholder="Lbs."
        />
        <Text style={styles.body}>Estimated Expiration Date</Text>
        <TextInput
          style={styles.input}
          placeholder="mm/dd/yy"
        />
        <Button
          style={styles.button}
          title="+ Add Item"
        />
      </View>
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
    fontSize: 20,
    paddingTop: 15,
  }
});
