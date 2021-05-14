import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList } from 'react-native'

import axios from 'axios'

import Product from './src/components/Product.js'
import Style from './src/Styles/ProductsStyle.js'

const App = () => {
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(1)
  const [isLoading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect( async () => {
    let copyProducts = []
    for (let i = 0; i < limit; i++) {
      await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${offset + i}/`
      ).then(res => {
        const { id, name, sprites, base_experience } = res.data
        const { front_shiny } = sprites
        copyProducts.push({id, name, front_shiny, base_experience})
      }).catch(
        error => {
          console.warn(error)
        })
    }
    setProducts(copyProducts)
    setLoading(false)
  }, [])

  const toggleTask = id => {
    const copyProducts = [...products]
    copyProducts.forEach(copyProduct => {
      if (copyProduct.id == id) {
        copyProduct.isAdded = copyProduct.isAdded ? false : true
      }
    })
    setProducts(copyProducts)
  }

  return (
    <SafeAreaView style={{ flexGrow: 1 }} >
      <View style={{ flexGrow: 1 }}>
        <Text> NavBar</Text>
      </View>
      <View style={Style.productsContainer}>
        {isLoading
          ? <Text> Loading </Text>
          : <FlatList
            style={Style.flatlist}
            numColumns={2}
            data={products}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <Product {...item} toggleTask={toggleTask} />} />
        }
      </View>
    </SafeAreaView>
  )
}

export default App
