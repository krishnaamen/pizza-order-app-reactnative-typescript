import { View, Text,Image,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { Stack,useLocalSearchParams, useRouter } from 'expo-router'
import products from '@/assets/data/products'
import {useState} from 'react'
import Button from '../../../components/Button'
import { useCart } from '@/src/providers/CartProvider'
import { PizzaSize } from '@/src/types'

const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('S');
  const { addItem} = useCart();

  const router = useRouter();
  
  
  
  const { id } = useLocalSearchParams();
  console.log(id);
  const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];
  const product = products.find((product) => product.id.toString() === id);
 console.log(product);
  const addToCart = () => {
    console.log('add to cart');
    console.log(product);
    if(!product){
      return;
    }
    addItem(product, selectedSize);
    router.push('/cart');
    
  }
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
    marginTop: 10,
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