import React, {useContext} from "react";
import {View, Text, StyleSheet} from "react-native";
import { CartContext } from "../../CartContext";

export function CartIcon({navigation}){
    const {getItemsCount} = useContext(CartContext);
	// const {UngetItemsCount} = useContext(CartContext);
    return(
        <View style={styles.container}>
            <Text style={styles.text} >
                  ({getItemsCount()})
            </Text>
			{/* <Text style={styles.text} onPress={() => {navigation.navigate('Cart')}}>
               Add to  Cart ({getItemsCount()})
            </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		backgroundColor: 'orange',
		height: 50,
		width: 50,
		padding: 2,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:12
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16
	}
})