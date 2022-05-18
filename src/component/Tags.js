import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {height, normalize, normalizeHorizontal, width} from '../helper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//   import {IC_BACK, IC_NEXT} from '../assets';

const TagsComp = ({
    style = {}, 
    textStyle = {},
    

}) => {
  return (
    <TouchableOpacity style={[styles.btnTag, style]}>
      <Text style={[styles.Tag, textStyle]}>{`#`}</Text>
      <Text style={[styles.txtTag, textStyle]}>{`2021`}</Text>
    </TouchableOpacity>
  );
};

export const Tags = React.memo(TagsComp);

const styles = StyleSheet.create({
  btnTag: {
    width: '22%',
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    flexDirection: 'row',
    borderRadius: 20,
  },
  txtTag: {
    color: 'black',
    fontSize: normalize(16),
    lineHeight: normalize(24),
    fontWeight: '400',
    marginHorizontal: 8,
  },
  Tag: {
    color: 'black',
    fontSize: normalize(16),
    lineHeight: normalize(24),
    fontWeight: '400',
  },
});
