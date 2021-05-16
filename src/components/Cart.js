import React from 'react'
import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import cartStyle from '../Styles/CartStyle.js'
import textStyle from '../Styles/TextStyle.js'
import imageStyle from '../Styles/TextStyle.js'


const Cart = ({ id, name, base_experience, front_shiny, isAdded,
    addRemoveProduct, toggleProduct }) => {

    return (
        <View style={cartStyle.cart}>
            <Image
                source={{ uri: front_shiny }}
                style={{ width: 60, height: 60 }} />
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

export default Cart