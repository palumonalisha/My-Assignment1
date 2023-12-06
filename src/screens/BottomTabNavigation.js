import React from 'react'
import { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import CardDetails from './CardDetails';


import ProductList from '../screens/ProductList'
import Profile from '../screens/Profile';
import MoreProductDetails from '../screens/MoreProductDetails';
// import Card from '../screens/Card/';
import { color } from '@rneui/themed/dist/config';

const Tab = createBottomTabNavigator()

const Tabs = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -10,
      justifyContent: 'center',
      alignItems: 'center',
      shadoColor: 1,
      shadowOffset: {
        width: 10,
        hight: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elavation: 15,

    }}
    onPress={onPress}
  >

    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#e32f45'
    }}>
      {children}
    </View>
  </TouchableOpacity>


)

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 5,
    height: 70,
    shadoColor: 1,
    shadowOffset: {
      width: 0,
      hight: 12,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elavation: 10,
  },
}
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="ProductList"
        component={ProductList}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? color : 'blue'}
              />
            )
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={24}
                color={focused ? color : 'blue'}
              />
            )
          },
        }}
      />


      <Tab.Screen
        name="MoreProductDetails"
        component={MoreProductDetails}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'bookmarks' : 'bookmarks-outline'}
                size={24}
                color={focused ? color : 'blue'}
              />
            )
          },
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomTabNavigation
