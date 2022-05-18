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
import {IC_HEART, IMAGE_ITEMCENTER,IMAGE_ITEM3,IMAGE_ITEM4,IMAGE_ITEM5} from '../assets';

const Product = [
  {
    id: 1,
    image: IMAGE_ITEMCENTER,
    content: '21WN reversible angora cardigan',
    money: '$120',
  },
  {
    id: 2,
    image: IMAGE_ITEM3,
    content: '21WN reversible angora cardigan',
    money: '$120',
  },
  {
    id: 3,
    image: IMAGE_ITEM4,
    content: '21WN reversible angora cardigan',
    money: '$120',
  },
  {
    id: 4,
    image: IMAGE_ITEM5,
    content: '21WN reversible angora cardigan',
    money: '$120',
  },
];
const ProductCenterComp = ({
  textStyle = {},
  numColumns = {},

}) => {
  const Item = ({item, index}) => {
    return (
      <View style={styles.product}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.productChoose}>
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
      contentContainerStyle={styles.FlatList}
      numColumns={[2]}
    />
  );
};

export const ProductCenter = React.memo(ProductCenterComp);

const styles = StyleSheet.create({
  image: {
    width: 165,
    height: 200,
  },
  productChoose: {
    // marginTop: normalize(10),
    alignItems: 'center',
    aspectRatio: 4.0,
  },
  content: {
    alignSelf: 'center',
  },
  txtContent: {
    fontWeight: '400',
    fontSize: normalize(14),
    lineHeight: normalize(18),
    color: '#555555',
    textAlign: 'center',
  },
  txtMoney: {
    color: '#DD8560',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    fontWeight: '400',
  },
  product: {
    margin: 10,
  },
  FlatList: {
    alignSelf: 'center',
  },
});
