import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions
} from 'react-native';
import { MapView } from 'expo';
import { Title } from '../components/Title';

export class DashboardScreen extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.topContent}>
          <Title style={styles.title}>Dashboard</Title>
        </SafeAreaView>
        <MapView
          style={styles.map}
          initialRegion={{

          }}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  topContent: {
    flex: 1
  },
  map: {
    flex: 2
  },
  title: {
    textAlign: 'center',
    marginTop: 50
  }
});
