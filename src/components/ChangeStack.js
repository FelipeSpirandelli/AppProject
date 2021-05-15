import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Style from '../Styles/Navbar'

const ChangeStack = props => {

    return (
        <View >
            <View style={Style.navbar}>
                {
                    props.back
                        ? (
                            <TouchableOpacity onPress={() => (
                                props.navigation.goBack()
                                
                            )
                            }>
                                <Ionicons name="arrow-back-outline" size={30} />
                            </TouchableOpacity>
                        )
                        : false
                }
                {
                    props.avance
                        ? (
                            <TouchableOpacity onPress={() => (
                                props.navigation.navigate(props.avance)
                            )
                            }>
                                <Ionicons 
                                    name="cart-outline" 
                                    color = {props.color}
                                    size={30} />
                            </TouchableOpacity>
                        )
                        : false
                }
            </View>
            <View style={{ flexGrow: 1 }}>
                {props.children}
            </View>
        </View>
    )

}

export default ChangeStack