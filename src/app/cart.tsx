import { View, Text, Platform, FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { useCart } from '../providers/CartProvider';
import CartListItem from '../components/CartListItem';
import Button from '../components/Button';

const CartScreen = () => {
  const { items, total } = useCart();
  console.log(items);
  return (
    <View style={{padding: 10}}>
      <FlatList 
      data={items}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      contentContainerStyle={{ gap: 10 }}
      
      />
      <Text style={{textAlign: 'right', fontSize:20, fontWeight: '600', marginVertical: 10}}>Total: DKK {total.toFixed(2)}</Text>
      <Button text="Checkout" onPress={() => {}} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen;