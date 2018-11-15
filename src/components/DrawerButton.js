import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation, DrawerActions } from 'react-navigation';
import { Foundation } from '@expo/vector-icons';

class Button extends React.PureComponent {

  openDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  }

  render() {
    return (
      <View
        style={{
          paddingLeft: 20,
          paddingTop: 10
        }}
      >
        <TouchableOpacity
          onPress={this.openDrawer}
        >
          <Foundation
            name='list'
            size={32}
            color='#007aff'
          />
        </TouchableOpacity>
      </View>
    );
  }

}

export const DrawerButton = withNavigation(Button);
