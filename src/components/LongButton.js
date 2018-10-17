import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

export const LongButton = (props) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: props.backgroundColor,
      padding: 20,
      width: Dimensions.get('window').width,
    },
    text: {
      fontSize: 20,
      color: props.textColor,
      textAlign: 'center',
    }
  });
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}
    >
      <Text style={styles.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
