import React from 'react'
import { Text, SafeAreaView, View, FlatList } from 'react-native'

import Cart from '../components/Cart.js'
import Style from '../Styles/ProductsStyle.js'

const CartList = ({ cartProducts, addRemoveProduct, toggleProduct }) => {

    return (
        <SafeAreaView>
            <View>
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
            </View>
        </SafeAreaView>
    )
}

export default CartList