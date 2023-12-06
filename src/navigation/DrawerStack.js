import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomTabNavigation from '../screens/BottomTabNavigation';
// import CustomDrawer from '../../src/navigation/CustomDrawer/';
import { useNavigation } from '@react-navigation/native';

import ProductList from '../screens/ProductList';
import Profile from '../screens/Profile';
import Login from '../Authentication/Login';
// import Card from '../myScreens/Card/';


const Drawer = createDrawerNavigator();


const DrawerStack = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>

      <Drawer.Screen
        name="ProductList"
        component={BottomTabNavigation}
        onPress={() => navigation.navigate('ProductList')}
        // component={HomePage}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
            
          ),
        }}
      />
     
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
     
      <Drawer.Screen
        name="LOGOUT"
        component={Login}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
};

export default DrawerStack;