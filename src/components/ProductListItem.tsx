import {Text,View,Image,StyleSheet,Pressable} from 'react-native'
import Colors from '../constants/Colors';
import { Product } from '../types';
import { Link, useSegments } from 'expo-router';

type ProductListItemProps = {
    product: Product;  
}
export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const ProductListItem = ({product }:ProductListItemProps) => {
  const segments = useSegments()
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image style={styles.image} 
      source={{uri: product.image || defaultPizzaImage}} 
      resizeMode='contain'
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price} DKK</Text>
      <Text> Go to details</Text>
    </Pressable>
    </Link>
    
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flex: 1,
        maxWidth: '50%',
     
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 10,
    },
    price: {
      color: Colors.light.tint,
    },
    image : { 
      width: '100%',
     aspectRatio: 1,
    }
  
  });