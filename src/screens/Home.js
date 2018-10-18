import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions
} from 'react-native';
import { LongButton } from '../components/LongButton';
import { Title } from '../components/Title';

export class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Title style={styles.title}>Welcome!</Title>
          <View>
            <Text style={styles.label}>I am a...</Text>
            <LongButton
              text='Donor / Volunteer'
              backgroundColor='#ff2400'
              textColor='white'
              onPress={() => navigate('SignUp')}
            />
            <LongButton
              text='Food Organization'
              backgroundColor='#ff5d37'
              textColor='white'
              onPress={() => navigate('SignUp')}
            />
            <LongButton
              text='Restaurant / Company / Business'
              backgroundColor='#ffa58b'
              textColor='white'
              onPress={() => navigate('SignUp')}
            />
          </View>
          <View>
            <Text>Been here before?</Text>
            <Button
              title='Log in'
              onPress={() => navigate('LogIn')}
            />
          </View>
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
