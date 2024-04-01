import { StyleSheet,Text, View, Image, ScrollView} from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

import EditScreenInfo from '../../components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
 
const product = products[0];
export default function TabOneScreen() {
  return (
    <ScrollView>
    <View>
    <ProductListItem product={products[0]} />
    <ProductListItem product={products[1]} />
    <ProductListItem product={products[2]} />
    </View>
    </ScrollView>
  );
}

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
