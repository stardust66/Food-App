import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions
} from 'react-native';
import { Title } from '../components/Title';
import { LongButton } from '../components/LongButton';
import { TextBox } from '../components/TextBox.js';
import firebase from '../services/firebase';

DEFAULT_STATE = {
  email: '',
  password: '',
  passwordConfirm: '',
  errorMessage: ''
};

export class SignUpScreen extends React.Component {

  state = Object.assign({}, DEFAULT_STATE);

  clearState = () => {
    this.setState(DEFAULT_STATE);
  }

  submit = () => {
    const { email, password, passwordConfirm } = this.state;
    if (password !== passwordConfirm) {
      this.setState({errorMessage: `Passwords don't match.`});
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).then(({user}) => {
      this.props.navigation.navigate('Dashboard');
    }).catch((error) => {
      this.setState({errorMessage: error.message});
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}>
        <View style={styles.container}>
          {this.state.errorMessage &&
            <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          }
          <Title style={styles.title}>Sign Up</Title>
          <View>
            <TextBox
              onEndEditing={(text) => this.setState({email: text})}
              placeholder='Email'
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
            onPress={this.submit}
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
  },
  errorMessage: {
    color: 'red'
  }
});
