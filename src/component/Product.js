import React from "react";
import { useState ,useEffect} from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";
import { styles} from "../styleSheet/Styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

export function Product({name, price, image, quantity, onPress}){

    
    const [qty,setqty] = useState ('')

    if (quantity != 0){
        useEffect(() => {
            setqty(quantity)
        })
    }
    else(
        useEffect(() => {
            setqty('outof Stock')
        })
    )

    return(
        
        <TouchableOpacity style={styles.card} onPress={onPress}>
            
            <Image style={styles.image} source={image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>$ {price}</Text>
                <Text > {qty}</Text>
                <View  style={{  left: 155 ,top:-80}}> 
                <Icon
                    name="heart-o"
                    size={25}
                    color='red'
                   

                />
            </View>
            <View  style={{  left: 155 ,top:-40,backgroundColor:'#000000',width:35,height:30,borderRadius:5,alignContent:"center",alignItems:"center"}}> 
                <Ionicons
                    name="cart-outline"
                    size={25}
                    color='white'
                   

                />
            </View>
            </View>

            
        </TouchableOpacity>
    )
}

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: 'white',
//         borderRadius: 16,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 10,
//         width: 150,
//         height: 241,
//         flexDirection: 'row', 
//         flexWrap: 'wrap',
//         margin:10,

      
//     },
//     image: {
//         width: 130,
//         height: 141,
//         aspectRatio: 1
//     },
//     infoContainer: {
//         padding: 16 
//     },
//     name: {
//         fontSize:17,
//         fontWeight: 'bold'
//     },
//     price: {
//         fontSize: 16,
//         fontWeight: '600',
//         marginBottom: 8
//     }
// })