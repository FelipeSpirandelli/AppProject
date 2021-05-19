import React, { useState, useEffect } from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import { SafeAreaView } from 'react-native'

import axios from 'axios'

import ProductsList from '../views/ProductsList.js'
import CartList from '../views/CartList.js'
import ChangeStack from '../components/ChangeStack'

const Stack = createStackNavigator()

export default props => {
    const [limit, setLimit] = useState(10)
    const [offset, setOffset] = useState(1)
    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [totalCost, setTotalCost] = useState(0)

    useEffect(async () => {
        let copyProducts = []
        for (let i = 0; i < limit; i++) {
            await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${offset + i}/`
            ).then(res => {
                const { id, name, sprites, base_experience } = res.data
                const { front_shiny } = sprites
                copyProducts.push({ id, name, front_shiny, base_experience, isAdded: false })
            }).catch(
                error => {
                    console.warn(error)
                })
        }
        setProducts(copyProducts)
        setLoading(false)
    }, [])

    const toggleProduct = id => {
        const copyProducts = [...products]
        copyProducts.forEach(copyProduct => {
            if (copyProduct.id == id) {
                copyProduct.isAdded = copyProduct.isAdded ? false : true
            }
        })
        setProducts(copyProducts)
    }

    const addRemoveProduct = (id, name, base_experience, front_shiny, isAdded) => {
        let copyCartProducts = [...cartProducts]
        let auxTotalCost = 0
    
        if (isAdded) {
            copyCartProducts = copyCartProducts.filter(copyCartProduct => {
                return copyCartProduct.id != id
            })

        } else {
            isAdded = !isAdded
            copyCartProducts.push({ id, name, base_experience, front_shiny, isAdded })
        }
        copyCartProducts.forEach((copyCartProduct) =>{  
            auxTotalCost +=  copyCartProduct.base_experience
        })
        setCartProducts(copyCartProducts)
        setTotalCost(auxTotalCost)
    }

    return (
        <SafeAreaView style ={{flexGrow:1}}>
            <Stack.Navigator
                initialRouteName="ProductsList"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="ProductsList"
                >
                    {
                        props => (
                            <ChangeStack {...props}
                                avance="Cart"
                                cartProducts={cartProducts}>
                                <ProductsList
                                    isLoading={isLoading}
                                    products={products}
                                    toggleProduct={toggleProduct}
                                    addRemoveProduct={addRemoveProduct} />
                            </ChangeStack>
                        )
                    }
                </Stack.Screen>
                <Stack.Screen
                    name="Cart"
                >
                    {
                        props => (
                            <ChangeStack {...props}
                                avance="Cart"
                                back="ProductsList"
                                cartProducts={cartProducts}>
                                <CartList
                                    toggleProduct={toggleProduct}
                                    totalCost = {totalCost}
                                    cartProducts={cartProducts}
                                    addRemoveProduct={addRemoveProduct} />
                            </ChangeStack>
                        )
                    }
                </Stack.Screen>

            </Stack.Navigator>
        </SafeAreaView>
    )

}
