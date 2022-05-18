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
import {
  IMAGE_ITEMSERVICE1,
  IMAGE_ITEMSERVICE2,
  IMAGE_ITEMSERVICE3,
  IMAGE_ITEMSERVICE4,
} from '../assets';

const Product = [
  {
    id: 1,
    image: IMAGE_ITEMSERVICE1,
    content: 'Fast shipping. Free on',
    text: 'orders over $25.',
  },
  {
    id: 2,
    image: IMAGE_ITEMSERVICE2,
    content: 'Sustainable process',
    text: 'from start to finish',
  },
  {
    id: 3,
    image: IMAGE_ITEMSERVICE3,
    content: 'Unique designs',
    text: 'and high-quality materials.',
  },
  {
    id: 4,
    image: IMAGE_ITEMSERVICE4,
    content: 'Fast shipping.',
    text: 'Free on orders over $25',
  },
];
const ServiceComp = ({textStyle = {}}) => {
  const Item = ({item, index}) => {
    return (
      <View style={styles.product}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.productChoose}>
          <Text style={styles.txtContent}>{item.content}</Text>
          <Text style={styles.txtMoney}>{item.text}</Text>
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
      numColumns={2}
    />
  );
};

export const Service = React.memo(ServiceComp);

const styles = StyleSheet.create({
  image: {
    width: 170,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  product: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
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
    lineHeight: normalize(24),
    color: '#555555',
  },
  txtMoney: {
    color: '#555555',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    fontWeight: '400',
  },
  FlatList: {
    alignSelf: 'center',
  },
});
