import React from 'react'
import {  StyleSheet  } from 'react-native'

const style = StyleSheet.create({
    textContainer:{
        backgroundColor: '#00BFFF',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5,
        paddingBottom: 30,
        margin: '2%',
        width: '46%',
        borderColor:'#000',
        borderWidth: 1,
    },
    productsContainer:{
        backgroundColor: '#FFF',
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
        marginBottom: 4,
        fontSize: 20,
        color: '#000',
    },
    pruductField:{
        flex:1
    },
    image:{
        width: 90,
        height: 90,
    }
})

export default style