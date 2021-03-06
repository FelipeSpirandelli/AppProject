import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Stack from './Stack'

const index = () => {
    
    return (
    <SafeAreaView style = {{flexGrow: 1}}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
    )

}

export default index