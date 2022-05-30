import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {normalize, normalizeHorizontal} from '../helper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IC_BAG} from '../assets';

const ButtonBuyNowComp = ({style = {}, textStyle = {}}) => {
  return (
    <TouchableOpacity style={[styles.btnSubmit, style]}>
      <Image
        style={styles.btnBuyNow}
        resizeMode="cover"
        source={IC_BAG}
      />
      <Text style={[styles.txtSubmit, textStyle]}>{`BUY NOW`}</Text>
    </TouchableOpacity>
  );
};

export const ButtonBuyNow = React.memo(ButtonBuyNowComp);

const styles = StyleSheet.create({
  btnSubmit: {
    width: '100%',
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    flexDirection:'row',
    alignSelf:'center'
  },
  txtSubmit: {
    color: '#fff',
    fontSize: normalize(16),
    lineHeight: normalize(24),
    fontWeight: '400',
    marginLeft: normalizeHorizontal(20),
    marginRight: normalizeHorizontal(20),
    letterSpacing: 1
  },
});
