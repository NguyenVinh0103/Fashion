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
import {IC_BACK, IC_NEXT} from '../assets';

const ButtonSubmitComp = ({
  style = {}, 
  textStyle = {},
  leftIcon = IC_BACK,
  rightIcon = IC_NEXT,
}) => {
  return (
    <TouchableOpacity style={[styles.btnSubmit, style]}>
      <Image source={IC_BACK} style = {style.leftIcon} /> 
      <Text style={[styles.txtSubmit, textStyle]}>{`SUBMIT`}</Text>
      <Image source={IC_NEXT} style = {style.rightIcon} /> 
    </TouchableOpacity>
  );
};

export const ButtonSubmit = React.memo(ButtonSubmitComp);

const styles = StyleSheet.create({
  btnSubmit: {
    width: '40%',
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection:'row',
    alignSelf:'center'
  },
  txtSubmit: {
    color: 'black',
    fontSize: normalize(16),
    lineHeight: normalize(24),
    fontWeight: '400',
    marginHorizontal: 20

  },
  leftIcon:{
    backgroundColor:'#fff'
  }
});
