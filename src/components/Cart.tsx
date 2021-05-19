import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import cartStyle from '../Styles/CartStyle';
import textStyle from '../Styles/TextStyle';
import imageStyle from '../Styles/ImageStyle';

export interface Props {
    item:{
        id:number, 
        name:string, 
        base_experience:number, 
        front_shiny:string, 
        isAdded:boolean
    },
    addRemoveProduct: (id:number, name:string, base_experience:number, front_shiny:string, isAdded:boolean) => void ,
    toggleProduct: (id:number) => void
}

const Cart = ({ item, addRemoveProduct, toggleProduct }: Props): JSX.Element => {
    const {id , name, base_experience , front_shiny, isAdded} = item
    return (
        <View style={cartStyle.cart}>
            <Image
                source={{ uri: front_shiny }}
                style={imageStyle.smallImage} />
            <Text style={textStyle.primaryText}>{name}</Text>
            <Text style={textStyle.primaryText}>R${base_experience}</Text>
            <TouchableOpacity onPress={() => {
                toggleProduct(id)
                addRemoveProduct(id, name, base_experience, front_shiny, isAdded)
            }}>
                <Ionicons name="close-circle-outline" color = {'red'} size={30} />
            </TouchableOpacity>
        </View>
    )
}

export default Cart;