import React from 'react'
import {  StyleSheet  } from 'react-native'

const style = StyleSheet.create({
    textContainer:{
        backgroundColor: '#000',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 30,
        width: '50%'
    },
    productsContainer:{
        backgroundColor: '#346782',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexGrow:20
    },
    flatlist: {
        flexDirection: 'column'
    },
    primaryText: {
        margin: 10,
        fontSize: 20,
        color: '#FFF',
    },
    pruductField:{
        flex:1
    },
    image:{
        width: 50,
        height: 50,
    }
})

export default style