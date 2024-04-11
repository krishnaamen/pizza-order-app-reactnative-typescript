import { View, Text,StyleSheet,TextInput,Image,Alert } from 'react-native'
import React,{useState} from 'react'
import Button from '@/src/components/Button'
import { defaultPizzaImage } from '@/src/components/ProductListItem';
import Colors from '@/src/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';


const CreateProductScreen = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(''); 
    const [image, setImage] = useState(null);

    const { id } = useLocalSearchParams();
    const isUpdating = !!id;
    console.log(id);
    



    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    const resetFields = () => {
        setName('');
        setPrice('');
     }

    const onCreate = () => {   
         if(!validateInput()){
            return;     }
        setError('');
        console.warn('Create the product', name, price  );

        resetFields();
    }  

    const validateInput = () => {   
        setError('');
        if(name.length === 0 || price.length === 0){
            setError('Name and price are required');
            return false;
        }
        if (isNaN(parseFloat(price))) {   
            setError('Price must be a number');
            return false;
          }
        return true;
    }   

    const onSubmit = () => {
        if(isUpdating){
            onUpdate();
        }else{
            onCreate();
        }
    }   

    const onUpdate = () => {
        if(!validateInput()){
            return;     }
        setError('');
        console.warn('Updating  the product', name, price  );

        resetFields();

    }
   const  confirmDelete = () => { 
        Alert.alert('Delete Product', 'Are you sure you want to delete this product?', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    console.warn('Delete');
                    resetFields();
                },
            },
        ]); 
   }
    

  return (
    <View style={styles.container}>
        <Stack.Screen options={{title: isUpdating ? 'Update Product':'Create Product'}} />
        <Image source={{uri: image || defaultPizzaImage}} style={styles.image} />
        <Text onPress={pickImage} style={styles.title}>Select Image</Text>
      <Text style={styles.label}>create</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='Name'/>
      <Text style={styles.label}>Price (DKK)</Text>
      <TextInput value={price} onChangeText={setPrice} style={styles.input} keyboardType='numeric' placeholder='9.98'/>
        <Text style={{color: 'red'}}>{error}</Text>
      <Button onPress={onSubmit} text={isUpdating?'Update':'Create'}/>
      {isUpdating && <Text style={styles.textButton} onPress={confirmDelete}>Delete</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{  
        flex: 1,
        justifyContent: 'center',
        padding: 10,
       },
         label: {
            fontSize: 20,
            fontWeight: 'bold',
         },
            input: {
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginVertical: 10,
                padding: 10,
            },
            image: {
                width: '50%',
                aspectRatio: 1,
                alignSelf: 'center',
            },
            title: {
                alignSelf: 'center',
                fontWeight: 'bold',
                color: Colors.light.tint,
                marginVertical: 10,
            },
            textButton: {
                color: 'red',
                alignSelf: 'center',
                marginVertical: 10,
            }
})

export default CreateProductScreen