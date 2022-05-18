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
  IMAGE_TOPCOLLECTION,
  IMAGE_CENTERCOLLECTION,
  IMAGE_BOTTOMCOLLECTION,
  IC_PLAY,
} from '../assets';
import { back } from 'react-native/Libraries/Animated/Easing';
import NativeHeadlessJsTaskSupport from 'react-native/Libraries/ReactNative/NativeHeadlessJsTaskSupport';

const CollectionsComp = ({textStyle = {}}) => {
  return (
    <View>
      <View style={styles.topCollection}>
        <Image style={styles.imageTop} source={IMAGE_TOPCOLLECTION} />
        <View style={styles.txtTopCollection}>
          <Text style={styles.txt}>{`10`}</Text>
          <View style={styles.txtPosition}>
            <Text style={styles.txtOctober}>{`October`}</Text>
            <Text style={styles.txtCollection}>{`Collection`}</Text>
          </View>
        </View>
      </View>

      <View style={styles.centerCollection}>
        <Image style={styles.imageCenter} source={IMAGE_CENTERCOLLECTION} />
        <View style={styles.txtCenter}>
          <Text style={styles.txtCenterAutumn}>{`Autumn`}</Text>
          <Text style={styles.txtCenterCollection}>{`Collection`}</Text>
        </View>
      </View>
      <View style={styles.bottomCollection}>
        <Image style = {styles.imageBottom} source={IMAGE_BOTTOMCOLLECTION} />
        <View style = {styles.border}>
            <Image style = {styles.iconPlay} source={IC_PLAY} />
        </View>
        
      </View>
    </View>
  );
};

export const Collections = React.memo(CollectionsComp);

const styles = StyleSheet.create({
  imageTop: {
    width: '100%',
  },
  txtTopCollection: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: normalize(20),
  },
  txt: {
    fontSize: normalize(180),
    fontWeight: '800',
    color: '#333',
    fontStyle: 'italic',
    marginRight: normalizeHorizontal(20),
  },
  txtPosition: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: normalize(76),
  },
  txtOctober: {
    fontSize: normalize(40),
    fontWeight: '700',
    color: '#FCFCFC',
    fontStyle: 'italic',
    marginRight: normalizeHorizontal(40),
    lineHeight: normalize(60),
  },
  txtCollection: {
    fontSize: normalize(16),
    letterSpacing: 6,
    fontWeight: '400',
    color: '#FCFCFC',
    fontStyle: 'normal',
    lineHeight: normalize(20),
  },
  imageCenter: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: normalize(40),
  },
  txtCenter: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: normalize(60),
  },
  txtCenterAutumn: {
    fontSize: normalize(46),
    fontWeight: '700',
    color: '#333',
    fontStyle: 'italic',
    marginRight: '26%',
    lineHeight: normalize(60),
  },
  txtCenterCollection: {
    fontSize: normalize(16),
    letterSpacing: 6,
    fontWeight: '400',
    color: '#333',
    fontStyle: 'normal',
    lineHeight: normalize(16),
    marginLeft: normalizeHorizontal(10)
  },
  imageBottom:{
    width: '100%',
  },
  border:{
    width: 50,
    aspectRatio: 1,
    borderRadius: 50 / 2,
    margin: 10,
    position: 'absolute',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
  },
  bottomCollection:{
    justifyContent:'center'
  },
  iconPlay:{
    width: '20%',
  }
});
