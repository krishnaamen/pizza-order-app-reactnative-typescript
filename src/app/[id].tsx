import { View, Text,Image,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { Stack,useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'
import {useState} from 'react'
import Button from '../components/Button'
const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState('S');
  const addToCart = () => {
    console.warn('Added to cart -> ', selectedSize  );
  }

  

  const { id } = useLocalSearchParams();
  const sizes = ['S', 'M', 'L', 'XL'];
  const product = products.find((product) => product.id.toString() === id);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product?.name}} />
      <Image source={{uri: product?.image}} style={styles.image} />
      <Text>Select size</Text>
      <View style={styles.sizes}>
      {sizes.map((size) => (
        <Pressable onPress={()=>{ setSelectedSize(size)}}key={size} style={[styles.size,{backgroundColor:selectedSize === size? 'gainsboro':'white' }]}>
          <Text style={[styles.sizeText,{color:selectedSize === size? 'black':'gray'}]}>{size}</Text>
        </Pressable>
        
        ))}
      </View>
      
      <Text style={styles.price}>DKK {product?.price} </Text>
      <Button text="Add to cart" onPress={addToCart} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,  
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
    color: 'blue',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
  size:{
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: 'gainsboro',
    borderColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  sizeText: {
    fontSize: 16,
  },
  sizes: { 
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',         
   }
})

export default ProductDetailsScreen;