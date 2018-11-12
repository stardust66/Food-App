import React from 'react';
import { View, TextInput } from 'react-native';

/**
 * DetailInput - TextInput used with arrays in the state. Updates objects
 * in the array with the given index.
 * Props:
 * - index: index of object in the array.
 * - key: key of property to update.
 * - submit: submit callback. Takes index of the edited object in the array
 *   and an update object (to be used with Object.assign)
 */
export class DetailInput extends React.PureComponent {

  submit = (e) => {
    this.props.submit(this.props.index, {[this.props.key]: e.nativeEvent.text});
  }

  render() {
    return (
      <TextInput
        onEndEditing={this.submit}
        style={this.props.style}
      />
    )
  }

}
