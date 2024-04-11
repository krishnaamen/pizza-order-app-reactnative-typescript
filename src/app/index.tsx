import { View} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Link href={'/(user)'} asChild>
        <Button text="User" />
      </Link>
      <Link href={'/(admin)'} asChild>
        <Button text="Admin" />
        </Link>
      <Link href={'/sign-in'} asChild>
        <Button text="Sign in" />
      </Link>
    </View>
  );
};

export default index;