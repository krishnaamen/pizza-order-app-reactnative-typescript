import { StyleSheet,Text, View, Image, ScrollView, FlatList} from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

import EditScreenInfo from '../../../components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
 
const product = products[0];
export default function HomeScreen() {
  return (
    
    
    <FlatList
    data={products}
    renderItem={({item}) => <ProductListItem product={item }/>}
    numColumns={2}
    contentContainerStyle={{ gap: 10, padding: 10}}
    columnWrapperStyle={{gap: 10}}
    />
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,
   
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
