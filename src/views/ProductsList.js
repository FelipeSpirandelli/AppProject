import React from 'react'
import { SafeAreaView, Text, View, FlatList } from 'react-native'

import Product from '../components/Product.js'
import Style from '../Styles/ProductsStyle.js'

const ProductsList = ({addRemoveProduct, toggleProduct, products, isLoading}) => {

    return (
        <SafeAreaView>
            <View style={Style.productsContainer}>
                {isLoading
                    ? <Text> Loading </Text>
                    : <FlatList
                        style={Style.flatlist}
                        numColumns={2}
                        data={products}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Product {...item}
                        toggleProduct={toggleProduct}
                        addRemoveProduct = {addRemoveProduct} />} />
                }
            </View>
        </SafeAreaView>
    )
}

export default ProductsList
