import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {normalize, normalizeHorizontal, width} from '../helper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IC_HEART, IMAGE_CART, IC_STAR} from '../assets';

const Product = [
  {
    id: 1,
    image: IMAGE_CART,
    name: '21WN ',
    content: 'reversible angora cardigan',
    money: '$120',
    icon: IC_HEART,
  },
];
const ProductDefaulComp = ({textStyle = {}}) => {
  const Item = ({item, index}) => {
    return (
      <View style={styles.product}>
        <View style={styles.imageProduct}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.heart}>
          <Image style = {styles.iconHeart} source={item.icon} />
          </View>
          
        </View>

        <View style={styles.productChoose}>
          <Text style={styles.txtName}>{item.name}</Text>
          <Text style={styles.txtContent}>{item.content}</Text>
          <Text style={styles.txtMoney}>{item.money}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={Product}
      renderItem={Item}
      keyExtractor={(item, index) => `${item.id} ${index}`}
      style={styles.FlatList}
    />
  );
};

export const ProductDefaul = React.memo(ProductDefaulComp);

const styles = StyleSheet.create({
    product:{
        width: '100%'
    },
  imageProduct: {
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    alignSelf:'flex-start',
  },
  image:{
    width: 165,
    height: 220
  },
  heart: {
    width: '10%',
    aspectRatio: 1,
    position:'absolute',
  },
  iconHeart:{
    marginLeft: normalizeHorizontal(10),
    marginTop: normalize(10)
  },
  productChoose: {
    marginTop: normalize(10),
  },
  txtName: {
    fontWeight: 'bold',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    letterSpacing: 2,
    color: '#000',
  },
  txtContent: {
    fontWeight: '400',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    color: '#555555'
  },
  txtMoney: {
    color: '#DD8560',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    fontWeight: '400',
  },
});
