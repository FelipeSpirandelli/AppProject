import React , { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList } from 'react-native'

import axios from 'axios'

import Product from './src/components/Product.js'
import Style from './src/Styles/ProductsStyle.js'

const App = () =>{
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  
   useEffect( async (limit, offset) => {
    const copyProducts = []
    const response = axios.get(
       `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
     )
    response.results.forEach( ( result ) => {
      let product = {}
      let url = result.url
      let data = axios(
        `${url}`
      )
      product.name = data.name
      product.image = data.sprites.back_default
      product.id = data.id
      copyProducts.push(product)
    })
    setProducts(copyProducts)
    setLoading(false)
   }, [])



  const toggleTask = id => {
    const copyProducts = [...products]
    copyProducts.forEach( copyProduct => {
      if(copyProduct.id == id){
        copyProduct.isAdded = copyProduct.isAdded ? false : true  
      }
    })
    setProducts(copyProducts)
  }

  return (
    <SafeAreaView style = { { flexGrow: 1}} >
      <View style = {{ flexGrow: 1 }}>
        <Text> NavBar</Text> 
      </View> 
      <View style = { Style.productsContainer }>
        { isLoading
        ? <Text> Loading </Text> 
        : <FlatList 
          style = {Style.flatlist}
          numColumns ={2}
          data = { products }
          keyExtractor ={ item => `${item.id}`}
          renderItem ={ ({item}) => <Product {...item} toggleTask = {toggleTask} /> }/>
        }
          </View> 
    </SafeAreaView>
  ) 
}

export default App
