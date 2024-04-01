import {Text,View,Image,StyleSheet} from 'react-native'
import Colors from '../constants/Colors';

const ProductListItem = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price} DKK</Text>

     
    </View>
    
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
     
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