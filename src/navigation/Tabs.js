import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import All from '../screens/All/index';
import Apparel from '../screens/Apparel/index';
import Dress from '../screens/Dress/index';
import Tshirt from '../screens/Tshirt/index';
import Bag from '../screens/Bag/index';

const Tab = createBottomTabNavigator();
const TabsComp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            // position: 'absolute',
            marginBottom: 300,
            marginRight: 12,
            elevation: 0,
            borderRadius: 12,
            height: 44,
            shadowColor: '#7fff00',
            ...styles.shadow,
            width: 400,
            height: 44,
            backgroundColor: '#fff',
          },
        }}>
        <Tab.Screen
          name="All"
          component={All}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  width: 150,
                  alignItems: 'center',
                  borderBottomLeftRadius: 8,
                  borderTopLeftRadius: 8,
                  height: 44,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: focused ? 'black' : '#555',
                    fontSize: 18,
                    fontWeight: '900',
                  }}>
                  All
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Apparel"
          component={Apparel}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  width: 150,
                  alignItems: 'center',
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  height: 44,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: focused ? 'black' : '#555',
                    fontSize: 18,
                    fontWeight: '900',
                    letterSpacing: 1,
                  }}>
                  Apparel
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Dress"
          component={Dress}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  width: 150,
                  alignItems: 'center',
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  height: 44,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: focused ? 'black' : '#555',
                    fontSize: 18,
                    fontWeight: '900',
                    letterSpacing: 1,
                  }}>
                  Dress
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="T-shirt"
          component={Tshirt}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  width: 150,
                  alignItems: 'center',
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  height: 44,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: focused ? 'black' : '#555',
                    fontSize: 18,
                    fontWeight: '900',
                    letterSpacing: 1,
                  }}>
                  T-shirt
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Bag"
          component={Bag}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  width: 150,
                  alignItems: 'center',
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  height: 44,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: focused ? 'black' : '#555',
                    fontSize: 18,
                    fontWeight: '900',
                    letterSpacing: 1,
                  }}>
                  Bag
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.65,
    shadowRadius: 9.5,
    elevation: 9,
  },
});

export const Tabs = React.memo(TabsComp);
