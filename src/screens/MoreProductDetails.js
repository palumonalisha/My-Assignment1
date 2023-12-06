import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@rneui/themed';
import 'react-native-gesture-handler';
import { getProducts } from '../service/ProductsService';
import { Product } from '../component/Product';

const numColumns = 1
export function MoreProductDetails() {
    const navigation = useNavigation();

    const menuClicked = () => {
        console.log('clicked')
        navigation.openDrawer()
    }

    function renderProduct({ item: product }) {
        return (
            <Product
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', { productId: product.id })
                }}
            />
        )
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts())
    })

    return (

        <View style={Styles.container}>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
                    <Icon
                        name="angle-left"
                        size={29}
                        color='#000000'
                        style={{ top: 18, bottom: 0, marginLeft: 6 }}
                    />
                </TouchableOpacity>

                <Text style={{ color: '#000000', fontSize: 22, fontWeight: 'bold', marginTop: 20, marginLeft: 18 }}>More Product Details</Text>

                <Icon
                    name="search"
                    size={20}
                    color='#000000'
                    style={{ marginTop: 28, position: 'absolute', right: 16, borderColor: '#ffff' }}
                />
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 2, marginTop: 18, }}>

                <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#EAEFF0', alignContent: 'center', alignItems: 'center', width: '45%', borderRadius: 8, marginLeft: 15, marginRight: 15, }} >

                    <Image
                        source={require('../../src/images/chery.png')}
                        style={{ height: 30, width: 35, borderRadius: 10, marginLeft: 10, marginTop: 15 }}
                    />
                    <Text style={{ marginTop: 20, left: 26, fontSize: 18, fontWeight: 'bold' }}> fruits</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#EAEFF0', alignContent: 'center', alignItems: 'center', width: '45%', borderRadius: 8, }} >

                    <Image
                        source={require('../../src/images/vegetables.png')}
                        style={{ height: 30, width: 35, borderRadius: 10, marginLeft: 10, marginTop: 15 }}
                    />
                    <Text style={{ marginTop: 20, left: 26, fontSize: 18, fontWeight: 'bold' }}>Vegetables</Text>
                </TouchableOpacity>

            </View>

            <FlatList
                style={Styles.productsList}
                contentContainerStyle={Styles.productsListContainer}
                keyExtractor={(item) => item.id.toString()}
                data={products}
                renderItem={renderProduct}
                numColumns={numColumns}
            />

        </View>

    )

};


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
        backgroundColor: '#ffff',
        borderRadius: 40,


    },

    button: {
        backgroundColor: '#EAEFF0',
        width: 110,
        height: 45,
        marginTop: 22,
        borderRadius: 10,
        marginLeft: 10


    },
    buttonText: {
        color: '#0079D0',
        fontSize: 12,
        marginTop: 2,
        marginLeft: 15

    },


    productsListContainer: {
        backgroundColor: "#eeeeee",
        paddingVertical: 8,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

});

export default MoreProductDetails;


