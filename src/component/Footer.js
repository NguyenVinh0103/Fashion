import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import {normalize, normalizeHorizontal, width} from '../helper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  IC_TWITTER,
  IC_INSTAGRAM,
  IC_YOUTUBE,
} from '../assets';

const FooterComp = ({
    footerStyle = {},
    textStyle = {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={[styles.iconFooter,footerStyle]}>
          <Image source={IC_TWITTER} style={styles.iconTwitter} />
          <Image source={IC_INSTAGRAM} style={styles.iconInstagram} />
          <Image source={IC_YOUTUBE} style={styles.iconYoutube} />
        </View>
        <View style={styles.border}></View>
        <Text style={[styles.txtFooter.textStyle]}>{`support@openui.design`}</Text>
        <Text style={[styles.txtFooter.textStyle]}>{`+ 077 585 3483`}</Text>
        <Text style={[styles.txtFooter.textStyle]}>{`08:20 - 22:00 - Everyday`}</Text>
        <View style={styles.border}></View>
        <View style={styles.tag}>
          <Text style={[styles.txtTag,textStyle]}>{`About`}</Text>
          <Text style={[styles.txtTag,textStyle]}>{`Contact`}</Text>
          <Text style={[styles.txtTag,textStyle]}>{`Blog`}</Text>
        </View>
      </View>
      <View style={styles.CopyRight}>
        <Text
          style={
           [ styles.txtCopyRight,textStyle]
          }>{`Copyright OpenUI All Rights Reserved`}</Text>
      </View>
    </View>
  );
};

export const Footer = React.memo(FooterComp);

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(20),
  },
  iconInstagram: {
    marginLeft: normalizeHorizontal(50),
    marginRight: normalizeHorizontal(50),
  },
  border: {
    borderWidth: 1,
    width: '30%',
    alignSelf: 'center',
    borderColor: '#555',
    marginTop: normalize(20),
    marginBottom: normalize(20),
  },
  txtFooter: {
    color: '#333333',
    fontSize: normalize(16),
    fontWeight: '400',
    lineHeight: normalize(30),
  },
  tag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTag: {
    color: '#000',
    fontSize: normalize(16),
    fontWeight: '400',
    lineHeight: normalize(24),
    marginHorizontal: 20,
  },
  CopyRight: {
    backgroundColor: '#C4C4C4',
    marginTop: normalize(20),
    height: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCopyRight: {
    color: '#555',
  },
});
