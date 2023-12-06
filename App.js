import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import DrawerStack from './src/navigation/DrawerStack/';
import Login from './src/Authentication/Login';
import Registration from './src/Authentication/Registration';
import ProductList from './src/screens/ProductList';
import ProductDetails from './src/screens/ProductDetails';
import { CartProvider } from './CartContext';
import Profile from './src/screens/Profile';
import EditProfile from './src/Authentication/EditProfile';
import { CartIcon } from './src/component/CardIcon';
import { Cart } from './src/screens/Cart';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={({ route, navigation }) => ({ headerShown: false, })} initialRouteName="Login">
          <Stack.Screen name="ProductList" component={DrawerStack} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Cart" component={Cart} />
          {/* <Stack.Screen name="Cart" component={Cart} options={({ navigation }) => ({ title: 'Products', headerRight: () => <CartIcon navigation={navigation} /> })} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
