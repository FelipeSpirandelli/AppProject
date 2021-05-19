import React from 'react'
import { Text, SafeAreaView, View, FlatList } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import Cart from '../components/Cart.js'
import cartStyle from '../Styles/CartStyle.js'
import textStyle from '../Styles/TextStyle.js'

const CartList = ({ totalCost, cartProducts, addRemoveProduct, toggleProduct }) => {

    return (

        <SafeAreaView style={cartStyle.cartContainer, { marginBottom: 290 }}>
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
                ? (<View style={{ flexGrow: 1 }}>
                    <FlatList
                        data={cartProducts}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Cart
                            {...item}
                            toggleProduct={toggleProduct}
                            addRemoveProduct={addRemoveProduct} />} />
                    <Text style={textStyle.primaryText}>
                        Total: {totalCost}
                    </Text>
                </View>
                )
                : (<View style={{ flexGrowth: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={textStyle.primaryText} > Carrinho vazio </Text>
                    <Ionicons name='sad-outline' size={30} />
                </View>
                )
            }
        </SafeAreaView>
    )
}

export default CartList