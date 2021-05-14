import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsList from '../views/ProductsList.js'
import Cart from '../views/Cart.js'

const Stack = createStackNavigator()

export default props => {

    return (
        <Stack.Navigator 
        initialRouteName="ProductsList"
        screenOptions = {{headerShown: false}}
        >
            <Stack.Screen
                name="ProductsList"
                component={ProductsList}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
    )

}
