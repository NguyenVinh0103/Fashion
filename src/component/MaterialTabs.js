import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {All} from './All';
import {Apparel} from './Apparel';
import {Dress} from './Dress';
import {Tshirt} from './Tshirt';
import {Bag} from './Bag';
import {height, normalize} from '../helper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';

const Tab = createMaterialTopTabNavigator();

export const MaterialTabs = () => {
  return (
    <Tab.Navigator initialRouteName = {All}
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
        name="All"
        component={All}
        options={{
          tabBarLabel: 'All',
        }}
      />
      <Tab.Screen
        name="Apparel"
        component={Apparel}
        options={{
          tabBarLabel: 'Apparel',
        }}
      />
      <Tab.Screen
        name="Dress"
        component={Dress}
        options={{
          tabBarLabel: 'Dress',
        }}
      />
      <Tab.Screen
        name="Tshirt"
        component={Tshirt}
        options={{
          tabBarLabel: 'Tshirt',
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
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
