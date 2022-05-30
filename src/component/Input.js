import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {normalize, normalizeHorizontal} from '../helper';
const COLOR_TEXT_INPUT = '#666';
const INPUT_HEIGHT = normalize(56);

const Input = ({
  value = '',
  onChangeText = () => {},
  placeholder = '',
  tipStyle = {},
  placeholderTextColor = '#666',
}) => {
  return (
    <TextInput
      style={[styles.tip, tipStyle]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  tip: {
    width: '70%',
    marginLeft: normalizeHorizontal(24),
    height: INPUT_HEIGHT,
    color: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
});
