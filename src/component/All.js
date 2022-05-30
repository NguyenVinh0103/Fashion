import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, normalize, normalizeHorizontal} from '../helper';

import {ProductCenter, ProductCenterHorizontal} from '../component';

const AllComp = () => {
  return (
    <View style={styles.container}>
      <ProductCenter />
    </View>
  );
};

export const All = React.memo(AllComp);

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: 'white',
  },
});
