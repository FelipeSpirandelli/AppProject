import React from 'react'
import { Text, View, Button, Image } from 'react-native'

import Style from '../Styles/ProductsStyle.js'

const Cart = ({ id, name, base_experience, front_shiny, isAdded,
    addRemoveProduct, toggleProduct}) => {

    return (
        <View style = {Style.textContainer}>
            <Image 
            style = {Style.image}
            source= {{uri: front_shiny}}/>
            <Text style = {Style.primaryText}>{ name }</Text>
            <Text style = {Style.primaryText}>R${ base_experience }</Text>
            <Button
                title={ isAdded ?
                    "Retirar" :
                    "Adicionar"
                }
                onPress = { () => {
                    toggleProduct(id)
                    addRemoveProduct(id, name, base_experience, front_shiny, isAdded)
                }}
                color = { isAdded ? 
                    "#E74C3C" 
                    : "#28B463"
                    }
                
            />
        </View>
        )
}

export default Cart