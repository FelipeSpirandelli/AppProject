import React from 'react';
import { Text, SafeAreaView, View, FlatList } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Cart from '../components/Cart';
import cartStyle from '../Styles/CartStyle';
import textStyle from '../Styles/TextStyle';

export interface Props{
    totalCost: number,
    cartProducts: Array<{
        id: number,
        name: string, 
        base_experience: number, 
        front_shiny: string, 
        isAdded: boolean
    }>,
    addRemoveProduct: (id: number, name: string, base_experience: number, front_shiny: string, isAdded: boolean) => void,
    toggleProduct: (id: number) => void,
}

const CartList = ({ totalCost, cartProducts, addRemoveProduct, toggleProduct }: Props): JSX.Element => {

    return (

        <SafeAreaView style={cartStyle.cartContainer }>
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
                ? (<View >
                    <Text style={textStyle.primaryText}>
                        Total: {totalCost}
                    </Text>
                    <FlatList
                        data={cartProducts}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => 
                        <Cart
                            item = {item}
                            toggleProduct={toggleProduct}
                            addRemoveProduct={addRemoveProduct} />} />
                        <Text style={textStyle.primaryText}>
                            Total: {totalCost}
                        </Text>
                </View>
                )
                : (<View style={ cartStyle.emptyCart }>
                    <Text style={textStyle.primaryText} > Carrinho vazio </Text>
                    <Ionicons name='sad-outline' size={30} />
                </View>
                )
            }
        </SafeAreaView>
    )
}

export default CartList;