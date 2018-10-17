import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions
} from 'react-native';
import { Title } from '../components/Title';
import { LongButton } from '../components/LongButton';
import { TextBox } from '../components/TextBox.js';

export class LogInScreen extends React.Component {

  state = {
    username: '',
    password: ''
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Title style={styles.title}>Log In</Title>
          <View>
            <TextBox
              onEndEditing={(text) => this.setState({username: text})}
              placeholder='Username'
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
            onPress={() => console.log(this.state)}
          />
        </View>
      </View>
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
