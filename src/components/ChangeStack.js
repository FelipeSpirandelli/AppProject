import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import navbarStyle from '../Styles/Navbar'

const ChangeStack = (props) => { 
    return (
        <View >
            <View style={navbarStyle.navbar}>
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
                            {
                                !!props.cartProducts.length ?
                                <Ionicons 
                                    name="cart" 
                                    size={30} />
                                : <Ionicons 
                                    name="cart-outline" 
                                    size={30} />
                            }
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