import React from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, Button, Dimensions
} from 'react-native';
import { MapView } from 'expo';
import { Title } from '../components/Title';
import { DrawerButton } from '../components/DrawerButton';

export class DashboardScreen extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.topContent}>
          <DrawerButton />
          <Title style={commonStyles.title}>Dashboard</Title>
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
