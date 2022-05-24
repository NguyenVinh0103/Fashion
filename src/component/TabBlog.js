import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fashion} from './Fashion';
import {Promo} from './Promo';
import {LookBook} from './LookBook';
import {Policy} from './Policy';
import {Sa} from './Sa';
import {height, normalize} from '../helper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';

const Tab = createMaterialTopTabNavigator();

export const TabBlog = () => {
  return (
    <Tab.Navigator initialLayout={Home}
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          width: '100%',
          justifyContent: 'center',
        },
        tabBarLabelStyle: {
          fontSize: normalize(14),
          fontFamily: 'TenorSans',
          fontWeight: '400',
          fontStyle: 'normal',
          letterSpacing: normalize(1),
          textTransform: 'none',
          lineHeight: normalize(14),
          width: '100%',
          textAlign: 'center',
          height: 14,
        },
      }}>
      <Tab.Screen
        name="Fashion"
        component={Fashion}
        options={{
          tabBarLabel: 'Fashion',
        }}
      />
      <Tab.Screen
        name="Promo"
        component={Promo}
        options={{
          tabBarLabel: 'Promo',
        }}
      />
      <Tab.Screen
        name="LookBook"
        component={LookBook}
        options={{
          tabBarLabel: 'LookBook',
        }}
      />
      <Tab.Screen
        name="Policy"
        component={Policy}
        options={{
          tabBarLabel: 'Policy',
        }}
      />
      <Tab.Screen
        name="Sa"
        component={Sa}
        options={{
          tabBarLabel: 'Bag',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
