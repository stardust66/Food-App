import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions
} from 'react-native';
import { Title } from '../components/Title';
import { LongButton } from '../components/LongButton';
import { TextBox } from '../components/TextBox.js';

export class SignUpScreen extends React.Component {

  state = {
    username: '',
    password: '',
    passwordConfirm: ''
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Title style={styles.title}>Sign Up</Title>
          <View>
            <TextBox
              onEndEditing={(text) => this.setState({username: text})}
              placeholder='Username'
              style={{ marginBottom: 20 }}
            />
            <TextBox
              onEndEditing={(text) => this.setState({password: text})}
              placeholder='Password'
              style={{ marginBottom: 20 }}
            />
            <TextBox
              onEndEditing={(text) => this.setState({passwordConfirm: text})}
              placeholder='Confirm Password'
            />
          </View>
          <LongButton
            text='Submit'
            backgroundColor='#ff2400'
            textColor='white'
            onPress={() => console.log(this.state)}
          />
        </View>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 150,
  },
  white: {
    color: 'white',
  },
  title: {
    color: 'black'
  },
  label: {
    textAlign: 'center',
    marginBottom: 20,
  }
});
