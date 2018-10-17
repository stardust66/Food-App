import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

export class TextBox extends React.PureComponent {

  state = {
    text: ''
  };

  submitText = () => {
    this.props.onEndEditing(this.state.text);
  }

  render() {
    return (
      <View style={[styles.box, this.props.style]}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          onBlur={this.submitText}
          placeholder={this.props.placeholder}
          style={styles.text}
        >
        </TextInput>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRadius: 3,
    padding: 10,
    width: 0.8 * Dimensions.get('window').width,
  },
  text: {
    fontSize: 20,
  }
});
