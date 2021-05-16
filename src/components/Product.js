import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import productsStyle from '../Styles/ProductsStyle'
import textStyle from '../Styles/TextStyle.js'
import imageStyle from '../Styles/ImageStyle.js'

const Product = ({ id, name, base_experience, front_shiny, isAdded,
    toggleProduct, addRemoveProduct}) => {

    return (
        <View style = {productsStyle.textContainer}>
            <Image 
            style = {imageStyle.mediumImage}
            source= {{uri: front_shiny}}/>
            <Text style = {textStyle.primaryText}>{ name }</Text>
            <Text style = {textStyle.primaryText}>R${ base_experience }</Text>
            <TouchableOpacity onPress={() => {
                toggleProduct(id)
                addRemoveProduct(id, name, base_experience, front_shiny, isAdded)
            }}>
                { isAdded ?
                    (<View style = {productsStyle.buttonRemove} >
                    <Ionicons name="close-circle-outline" size={30} />
                    <Text style={textStyle.primaryText}> Remove </Text>
                    </View>) :
                    (<View style = {productsStyle.buttonAdd} >
                    <Ionicons name="checkmark-circle-outline" size={30} />
                    <Text style={textStyle.primaryText}> Add </Text>
                    </View>) 
                }
            </TouchableOpacity>
        </View>
        )
}

export default Product