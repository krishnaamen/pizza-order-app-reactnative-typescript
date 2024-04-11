import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '@/assets/data/orders';
import OrderListItem from '@/src/components/OrderListItem';
import OrderItemListItem from '@/src/components/OrderItemListItem';

const OrderDetailsScreen = () => {

    const { id } = useLocalSearchParams();
    const order = orders.find((order) => order.id.toString() === id);
    if(!order){
        return <Text>Order not found</Text>
    }   
  return (
    <View>
        <Stack.Screen options={{title:`Order # ${id}`}} />

        <OrderListItem order={order} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => (
           <OrderItemListItem item={item} />
        )}
        contentContainerStyle={{  gap: 10, padding: 10 }} 
        />
    
    </View>
  )
}

export default OrderDetailsScreen

const styles = StyleSheet.create({})