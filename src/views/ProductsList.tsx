import React from 'react'
import { SafeAreaView, Text, View, FlatList, ScrollView } from 'react-native'

import Product from '../components/Product'
import productStyle from '../Styles/ProductsStyle'

export interface Props {
    products: Array<{
        id: number,
        name: string, 
        base_experience: number, 
        front_shiny: string, 
        isAdded: boolean
    }>,
    isLoading: boolean,
    addRemoveProduct: (id:number, name:string, base_experience:number, front_shiny:string, isAdded:boolean) => void ,
    toggleProduct: (id:number) => void
}


const ProductsList = ({addRemoveProduct, toggleProduct, products, isLoading}: Props) => {

    return (
        <SafeAreaView >
            <View style={productStyle.productsContainer}>
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
