import React from 'react'
import { SafeAreaView, Text, View, FlatList, ScrollView } from 'react-native'

import Product from '../components/Product.js'
import productStyle from '../Styles/ProductsStyle.js'

const ProductsList = ({addRemoveProduct, toggleProduct, products, isLoading}) => {

    return (
        <SafeAreaView >
            <View style={productStyle.productsContainer, {marginBottom: 65}}>
                {isLoading
                    ? <Text> Loading </Text>
                    : <FlatList
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
