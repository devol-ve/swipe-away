import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';

export default function App() {
  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const onSignIn = () => {
    console.log( 'Username: ', username );
    console.log( 'Password: ', password );
  };

  const onForgot = () => {
    console.log( 'Forgot Password' );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style = { styles.container }>
        <CustomInput
          value = { username }
          setValue = { setUsername }
          placeholder = { 'Username' }
        />
        <CustomInput
          value = { password }
          setValue = { setPassword }
          placeholder = { 'Password' }
          secureTextEntry
        />
        <CustomButton
          text = { 'Sign In' }
          onPress = { onSignIn }
        />
        <CustomButton
          text = { 'Forgot Password' }
          onPress = { onForgot }
          type = { 'TERTIARY' }
        />
        <StatusBar style = 'auto' />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
