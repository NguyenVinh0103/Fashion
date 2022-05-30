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
import {normalize, normalizeHorizontal} from '../helper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IC_HEART, IMAGE_ITEMSOMI, IC_STAR} from '../assets';

const Product = [
  {
    id: 1,
    image: IMAGE_ITEMSOMI,
    name: 'LAMEREI',
    content: 'Recycle Boucle Knit Cardigan Pink',
    size: ['S', 'M' , 'L',],
    money: '$120',
    rating: '4.8 Ratings',
    icon: IC_HEART,
    iconRating: IC_STAR,
    isChecked: true
  },
];
const ProductSizeComp = ({textStyle = {}}) => {
  const [size , setSize] = useState('S')

  const chooseSize = () => {
    const index = Math.floor(data.map() * gifts.length)
    setGift(sizes[index]);
    console.log(sizes[index])
  }

  const Item = ({item, index}) => {
    return (
      <View style={styles.product}>
        <Image style = {styles.image} source={item.image} />
        <View style={styles.productChoose}>
          <Text style={styles.txtName}>{item.name}</Text>
          <Text style={styles.txtContent}>{item.content}</Text>
          <Text style={styles.txtMoney}>{item.money}</Text>
          <View>
            <View style={styles.rating}>
              <Image style =  {styles.iconRating} source={item.iconRating} />
              <Text style={styles.txtRating}>{item.rating}</Text>
            </View>
            <View style = {styles.iconHeart}>
              <View style={styles.Size}>
                <Text style={styles.txtSize}>{`Size`}</Text>
                <TouchableOpacity style={styles.chooseSize}>
                  <Text style = {styles.txtChooseSize}>{item.size}</Text>
                </TouchableOpacity>
              </View>
              <Image style={styles.heart} source={item.icon} />
            </View>
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

export const ProductSize = React.memo(ProductSizeComp);

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Size: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeart:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: normalize(8),
    alignItems:'center'
  },
  heart: {
   width: '10%',
   aspectRatio: 1
  },
  productChoose:{
      marginLeft: normalizeHorizontal(12),
      marginTop:normalize(10)
  },
  txtName:{
    fontWeight: 'bold',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    letterSpacing: 2,
    color: '#000'
  },
  txtContent:{
    fontWeight:'400',
    fontSize : normalize(14),
    lineHeight: normalize(24),
    color: '#555555'
  },
  txtMoney:{
    color : '#DD8560',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    fontWeight: '400'
  },
  iconRating:{
    width : '10%',
    aspectRatio: 1
  },
  txtRating:{
    fontWeight: '600',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    marginLeft: normalizeHorizontal(10),
    color: '#555555'
  },
  txtSize:{
    fontSize: normalize(16),
    fontWeight: '400',
    lineHeight:normalize(24),
    color: '#555',
  },
  chooseSize:{
    backgroundColor: 'gray',
    marginHorizontal: 12
  }
});
