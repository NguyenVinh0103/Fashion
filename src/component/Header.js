import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import {normalize, normalizeHorizontal, width} from '../helper';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IC_MENU, IC_SEARCH, IC_SHOPPINGBAG, IC_LOGO} from '../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderComp = ({
    style = {},
    textStyle = {}
}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.header}>
      <Image source={IC_MENU} style={styles.menu} />
      <Image source={IC_LOGO} style={styles.logo} />
      <View style={styles.headerRight}>
        <Image source={IC_SEARCH} style={styles.search} />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={IC_SHOPPINGBAG} style={styles.shoppingBag} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Header = React.memo(HeaderComp);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: normalizeHorizontal(12),
  },
  menu: {
    marginLeft: normalizeHorizontal(20),
  },
  search: {
    marginRight: normalizeHorizontal(10),
  },
});
