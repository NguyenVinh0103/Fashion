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
import LinearGradient from 'react-native-linear-gradient';
import {
  IMAGE_FOLLOWUS1,
  IMAGE_FOLLOWUS2,
  IMAGE_FOLLOWUS3,
  IMAGE_FOLLOWUS4,
} from '../assets';

const Product = [
  {
    id: 1,
    image: IMAGE_FOLLOWUS1,
    content: '@mia',
  },
  {
    id: 2,
    image: IMAGE_FOLLOWUS2,
    content: '@_jihyn',
  },
  {
    id: 3,
    image: IMAGE_FOLLOWUS3,
    content: '@mia',
  },
  {
    id: 4,
    image: IMAGE_FOLLOWUS4,
    content: '_jihyn',
  },
];
const FollowUsComp = ({textStyle = {}}) => {
  const Item = ({item, index}) => {
    return (
      <View style={styles.followUs}>
        <Image style={styles.image} source={item.image} />
        <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}style = {styles.border}>
            <Text style={styles.txtContent}>{item.content}</Text>
        </LinearGradient>
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

export const FollowUs = React.memo(FollowUsComp);

const styles = StyleSheet.create({
  followUs: {
    margin: 10
  },
  FlatList: {
    alignSelf: 'center',
  },
  txtContent: {
    color: '#fff',
    fontSize: normalize(14),
    fontWeight : '400',
    letterSpacing: 1,
    lineHeight: 18
  },
  border:{
    position:'absolute',
    marginTop: '80%',
    width: '100%',
    height: normalize(36)
  }
});
