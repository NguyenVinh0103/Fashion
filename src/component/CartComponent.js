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
import {IC_SUBTRACTION, IC_PLUS, IMAGE_CART, IMAGE_ITEM2} from '../assets';

const Product = [
  {
    id: 1,
    image: IMAGE_CART,
    name: 'LAMEREI',
    content: 'Recycle Bounce',
    iconSubtraction: IC_SUBTRACTION,
    iconPlus: IC_PLUS,
    money: '$120',
  },

  {
    id: 2,
    image: IMAGE_ITEM2,
    name: `52 52 By O!O!`,
    content: `2021 Signature Sweatshirt [NAVY]`,
    iconSubtraction: IC_SUBTRACTION,
    iconPlus: IC_PLUS,
    money: '$120',
  },
];

const CartComponentComp = () => {
  const [count, setCount] = useState(1);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleSubtraction = () => {
    setCount(count - 1);
  };

  const Item = ({item, index}) => {
    return (
      <View style={styles.Cart}>
        <Image style={styles.imageCart} source={item.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.content}>{item.content}</Text>
          <View style={styles.btnPlusAndSubtraction}>
            <TouchableOpacity onPress={handleSubtraction}>
              <Image
                style={styles.btnSubtraction}
                resizeMode="cover"
                source={IC_SUBTRACTION}
              />
            </TouchableOpacity>
            <Text style={styles.txtCount}>{count}</Text>
            <TouchableOpacity onPress={handlePlus}>
              <Image
                style={styles.btnPlus}
                resizeMode="cover"
                source={IC_PLUS}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.money}>{item.money}</Text>
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

export const CartComponent = React.memo(CartComponentComp);

const styles = StyleSheet.create({
  Cart: {
    flexDirection: 'row',
    marginVertical: 20
  },
  btnPlusAndSubtraction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: normalizeHorizontal(10),
    marginTop: normalize(10),
  },
  txtCount: {
    fontSize: 16,
    color: '#000',
    fontWeight: '900',
    marginLeft: 20,
    marginRight: 20,
  },
  name: {
    marginTop: normalize(10),
    letterSpacing: 2,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: normalizeHorizontal(10),
  },
  content: {
    marginTop: normalize(10),
    letterSpacing: 2,
    color: '#666',
    fontWeight: '400',
    marginLeft: normalizeHorizontal(10),
  },
  money: {
    marginTop: normalize(10),
    letterSpacing: 2,
    color: '#DD8560',
    fontWeight: '400',
    marginLeft: normalizeHorizontal(10),
  },
});
