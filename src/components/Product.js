import React from 'react'
import { Text, View, Button } from 'react-native'

import Style from '../Styles/ProductsStyle.js'

const Product = ({name , id, isAdded, toggleTask}) => {

    return (
        <View style = {Style.textContainer}>
            <Text style = {Style.primaryText}>{ name }</Text>
            <Button
                title={ isAdded ?
                    "Retirar" :
                    "Adicionar"
                }
                onPress = { () => {
                    toggleTask(id)
                }}
                color = { isAdded ? 
                    "#E74C3C" 
                    : "#28B463"
                    }
                
            />
        </View>
        )
}

export default Product