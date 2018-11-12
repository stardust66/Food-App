import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions
} from 'react-native';
import { Title } from '../components/Title';
import { LongButton } from '../components/LongButton';
import { TextBox } from '../components/TextBox';
import firebase from '../services/firebase';

export class LogInScreen extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: ''
  };

  submit = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(({user}) => {
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
          <Title style={styles.title}>Log In</Title>
          <View>
            <TextBox
              onEndEditing={(text) => this.setState({email: text})}
              placeholder='Email'
              style={{ marginBottom: 20 }}
            />
            <TextBox
              onEndEditing={(text) => this.setState({password: text})}
              placeholder='Password'
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
    textAlign: 'center',
    color: 'red'
  }
});
