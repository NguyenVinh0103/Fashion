import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Image
} from 'react-native';
import React, {useState} from 'react';
import {normalize, normalizeHorizontal} from '../helper/normalize';
import {fonts} from '../helper/fonts';

const OnBoardingItemComp = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        resizeMode="contain"
        style={[styles.modelImage, {width}]}
      />
      <Image
        source={item.luxury}
        resizeMode="contain"
        style={[styles.txtIconLuxury, {width}]}
      />
      <Image
        source={item.fashion}
        resizeMode="contain"
        style={[styles.txtIconFashion, {width}]}
      />
      <Image
        source={item.and}
        resizeMode="contain"
        style={[styles.txtIconAnd, {width}]}
      />
      <Image
        source={item.accessories}
        resizeMode="contain"
        style={[styles.txtIconAccessories, {width}]}
      />
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.txtNextButton}>{'EXPLORE COLLECTION'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const OnBoardingItem = React.memo(OnBoardingItemComp);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  modelImage: {
    flex: 1,
    height: normalize(660),
    marginTop: normalize(-20),
  },
  txtIconLuxury: {
    aspectRatio: 1,
    height: normalize(30),
    position: 'absolute',
    marginTop: normalize(240),
    marginLeft: normalizeHorizontal(-60),
  },
  txtIconFashion: {
    aspectRatio: 1,
    height: normalize(30),
    position: 'absolute',
    marginTop: normalize(280),
    marginLeft: normalizeHorizontal(-40),
  },
  txtIconAnd: {
    aspectRatio: 1,
    height: normalize(26),
    position: 'absolute',
    marginTop: normalize(320),
    marginLeft: normalizeHorizontal(-140),
  },
  txtIconAccessories: {
    aspectRatio: 1,
    height: normalize(30),
    position: 'absolute',
    marginTop: normalize(320),
    marginLeft: normalizeHorizontal(26),
  },
  nextButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '68%',
    height: normalize(40),
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    marginTop: normalize(520),
  },
  txtNextButton: {
    color: '#FCFCFC',
    fontSize: normalize(16),
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'TenorSans',
    lineHeight: normalize(24),
  },
});
