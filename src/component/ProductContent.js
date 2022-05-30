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
import {IC_HEART, IMAGE_ITEMCONTENT} from '../assets';

const Product = [
  {
    id: 1,
    image: IMAGE_ITEMCONTENT,
    name: '21WN ',
    content: 'reversible angora cardigan',
    money: '$120',
    icon: IC_HEART,
  },
];
const ProductContentComp = ({textStyle = {}}) => {
  const Item = ({item, index}) => {
    return (
      <View style={styles.product}>
        <View style={styles.imageProduct}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.heart}>
            <Image style={styles.iconHeart} source={item.icon} />
          </View>
        </View>

        <View style={styles.productChoose}>
          <Text style={styles.txtName}>{item.name}</Text>
          <View style = {styles.txt}>
          <Text style={styles.txtContent}>{item.content}</Text>
          <Text style={styles.txtMoney}>{item.money}</Text>
          </View>
          
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

export const ProductContent = React.memo(ProductContentComp);

const styles = StyleSheet.create({
  product: {
    alignSelf:'center'
  },
  imageProduct: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
  },
  image: {
    width: 344,
    height: 458,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  heart: {
    width: '10%',
    aspectRatio: 1,
    position: 'absolute',
  },
  iconHeart: {
    marginLeft: normalizeHorizontal(10),
    marginTop: normalize(10),
  },
  productChoose: {
    marginTop: normalize(10),
  },
  txt:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  txtName: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    lineHeight: normalize(40),
    letterSpacing: 4,
    color: '#000',
  },
  txtContent: {
    fontWeight: '400',
    fontSize: normalize(18),
    lineHeight: normalize(24),
    color: '#555555',
  },
  txtMoney: {
    color: '#DD8560',
    fontSize: normalize(18),
    lineHeight: normalize(24),
    fontWeight: '400',
  },
});
