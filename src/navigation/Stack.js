import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

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

    const addRemoveProduct = (id, name, base_experience, front_shiny, isAdded) =>{
        let copyCartProducts = [...cartProducts]
        
        if(isAdded){
            copyCartProducts = copyCartProducts.filter( copyCartProduct =>{
                return copyCartProduct.id != id 
            })

        } else {
            isAdded = !isAdded 
            copyCartProducts.push({id, name, base_experience, front_shiny, isAdded})
        }

        setCartProducts(copyCartProducts)
        console.log(copyCartProducts)
    }

    return (
        <Stack.Navigator
            initialRouteName="ProductsList"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="ProductsList"
            >
                {
                    props => (
                        <ChangeStack {...props} avance="Cart">
                            <ProductsList 
                            isLoading={isLoading}
                            products={products}
                            toggleProduct={toggleProduct}
                            addRemoveProduct = {addRemoveProduct}  />
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
                            back="ProductsList">
                            <CartList
                            toggleProduct={toggleProduct}  
                            cartProducts = {cartProducts}
                            addRemoveProduct={addRemoveProduct} />
                        </ChangeStack>
                    )
                }
            </Stack.Screen>

        </Stack.Navigator>
    )

}
