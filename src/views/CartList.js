import React from 'react'
import { Text, SafeAreaView, View, FlatList } from 'react-native'

import Cart from '../components/Cart.js'
import cartStyle from '../Styles/CartStyle.js'
import textStyle from '../Styles/TextStyle.js'

const CartList = ({ cartProducts, addRemoveProduct, toggleProduct }) => {

    return (

        <SafeAreaView style={cartStyle.cartContainer, { marginBottom: 70 }}>
            {
                cartProducts.length
                    ? (

                        cartProducts.length > 1 ?
                            <Text style={textStyle.primaryText}>
                                {cartProducts.length} produtos adicionados:
                            </Text>
                            :
                            <Text style={textStyle.primaryText}>
                                1 produto adicionado:
                            </Text> 
                        ) :
                    null
            }
            {!!cartProducts.length
                ? <FlatList
                    data={cartProducts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Cart
                        {...item}
                        toggleProduct={toggleProduct}
                        addRemoveProduct={addRemoveProduct} />} />
                : <Text> Why dont you add something? </Text>
            }
        </SafeAreaView>
    )
}

export default CartList