import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Title = (props) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 50
    }
  });
  return (
    <Text style={[styles.title, props.style]}>{props.children}</Text>
  );
};
