import React, { useEffect, useState, useContext } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { getProduct } from '../service/ProductsService';
import { CartContext } from '../../CartContext';
import { CartIcon } from '../component/CardIcon';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ProductDetails({ route }) {
  const navigation = useNavigation();
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(productId))
  })

  const { addItemToCart } = useContext(CartContext)
  const { deleteItemToCart } = useContext(CartContext)

  function onAddToCart() {
    addItemToCart(product.id)
  }
  function onDeleteToCart() {
    deleteItemToCart(product.id)
  }

  const [quantity, setQuantity] = useState(1);

  return (

    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>

          <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
            <Icon
              name="angle-left"
              size={29}
              color='#000000'
              style={{ top: 45, bottom: 0, marginRight: 305 }}
            />
          </TouchableOpacity>
          <Image style={styles.image} source={product.image} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
            <Button onPress={onDeleteToCart} title="-" buttonStyle={styles.button} />
            <CartIcon navigation={navigation} />
            <Button onPress={onAddToCart} title="+" buttonStyle={styles.button} />
          </View>
          <Button onPress={() => { navigation.navigate('Cart') }} title="Add to cart" />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
  image: {
    height: 290,
    width: 10,
    aspectRatio: 1
  },
  infoContainer: {
    padding: 16,

  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  button: {
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 40,
    borderRadius: 5,
    marginBottom: 50,
    backgroundColor: 'black',
    margin: 5
  }

});

export default ProductDetails;