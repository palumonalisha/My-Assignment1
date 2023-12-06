import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@rneui/themed';
// import CardDetails from './CardDetails';
import 'react-native-gesture-handler';
import { getProducts } from '../service/ProductsService';
import { Product } from '../component/Product';


const numColumns = 1
export function ProductsList() {
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

            <View>
                <Icon
                    name="bars"
                    size={19}
                    color='#000000'
                    style={{ paddingTop: 38, marginLeft: 16 }}
                    onPress={menuClicked}
                />

                <Icon
                    name="search"
                    size={20}
                    color='#000000'
                    style={{ paddingTop: 38, position: 'absolute', right: 16, borderColor: '#ffff' }}
                />

            </View>

            <Text style={{ color: '#000000', fontSize: 22, fontWeight: 'bold', marginTop: 13, marginLeft: 10 }}> Our Product</Text>
            <Text style={{ color: '#000000', fontSize: 15, position: 'absolute', right: 50, top: 100 }}> Sort by</Text>
            <Icon
                name="angle-down"
                size={19}
                color='#000000'
                style={{ position: 'absolute', right: 26, top: 100 }}
            />

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

            <View>
                <Image
                    source={require('../../src/images/slider2.webp')}
                    style={{ height: 110, width: 380, margin: 10, borderRadius: 5 }}
                />
            </View>

            <FlatList
                style={Styles.productsList}
                contentContainerStyle={Styles.productsListContainer}
                keyExtractor={(item) => item.id.toString()}
                data={products}
                renderItem={renderProduct}
                numColumns={numColumns}
            />
            <Text onPress={() => navigation.navigate('MoreProductDetails')} > See All</Text>
        </View>


    )

};


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 80,
        backgroundColor: '#ffff',
        borderRadius: 40

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

export default ProductsList;


