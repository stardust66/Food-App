import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions, TextInput,
  TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { LongButton } from '../components/LongButton';
import { Title } from '../components/Title';
import { DetailInput } from '../components/DetailInput';
import QuickPicker from 'quick-picker';

const DEFAULT_FOOD = {
  foodType: 'Packaged',
  foodDescription: '',
  estimatedWeight: '',
  estimatedExpirationDate: ''
};

export class DonateFoodScreen extends React.Component {

  static navigationOptions = {
    title: 'Donate'
  }

  state = {
    foods: [Object.assign({}, DEFAULT_FOOD)]
  }

  showFoodTypePicker = (index) => {
    console.log(index);
    QuickPicker.open({
      items: ['Packaged', 'Prepared'],
      selectedValue: this.state.foods[index].foodType,
      onValueChange: (value) => this.setState((prevState) => {
        foods: [...prevState.foods.slice(0, index),
                Object.assign(prevState.foods[index], {foodType: value}),
                ...prevState.foods.slice(index+1)]
      })
    });
  }

  addItem = () => {
    this.setState((prevState) => ({
      foods: [...prevState.foods, Object.assign({}, DEFAULT_FOOD)]
    }));
  }

  updateFood = (index, updateObject) => {
    this.setState((prevsState) => ({
      foods: [...prevState.foods.slice(0, index),
              Object.assign(prevState.foods[index], updateObject),
              ...prevState.foods.slice(index+1)]
    }));
    console.log(this.state);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}>
          <Text style={styles.header}>Items</Text>
          <View style={{width: 700, height: 7, backgroundColor: 'powderblue'}} />
          <QuickPicker />
          {this.state.foods.map((food, index) => (
            <React.Fragment key={index}>
              <Text style={styles.body}>Food Type</Text>
              <TouchableOpacity
                onPress={this.showFoodTypePicker.bind(this, index)}
              >
                <Text style={styles.input}>{food.foodType}</Text>
              </TouchableOpacity>
              <Text style={styles.body}>Food Description</Text>
              <TextInput
                style={styles.input}
                placeholder="E.g. Fried Chicken, Goldfish"
                value={food.foodDescription}
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
              <View style={{width: 700, height: 7, backgroundColor: 'powderblue'}} />
            </React.Fragment>
          ))}
          <Button
            style={styles.button}
            title="+ Add Item"
            onPress={this.addItem}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
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
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 15
  }
});
