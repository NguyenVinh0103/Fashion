import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import {height, normalize, normalizeHorizontal, width} from '../../helper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Footer, Header, CartComponent, ButtonSubmit, ButtonBuyNow,} from '../../component'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  IC_CLOSE
} from '../../assets';

const Cart = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      <TouchableOpacity>
        <Image source={IC_CLOSE} style={styles.remove} />
      </TouchableOpacity>
      <Text style = {styles.txtCart}>{`CART`}</Text>
      <View style = {styles.border}></View>
      <CartComponent/>
      <ButtonBuyNow/>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  remove:{
    height: normalize(50),
    aspectRatio: 1,
    marginLeft: normalizeHorizontal(8)
  },
  txtCart:{
    color: '#000',
    fontSize: normalize(18),
    lineHeight: normalize(40),
    fontWeight: '400',
    letterSpacing: 4,
    marginLeft: normalizeHorizontal(10)
  },
  border:{
    borderWidth: 1,
    width: '90%',
    borderColor: '#555'
  }
});
