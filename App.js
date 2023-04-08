import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import SafeViewAndroid from './src/components/SafeViewAndroid';
import Logo from './assets/logo.png';


const SignInScreen = ({ setAuth }) => {
  const { height } = useWindowDimensions();
  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const onSignIn = () => {
    console.log( 'Username: ', username );
    console.log( 'Password: ', password );
    setAuth( 'sample-token' );
  };

  const onForgot = () => {
    console.log( 'Forgot Password' );
  };

  return (
    <TouchableWithoutFeedback onPress = { Keyboard.dismiss } accessible = { false }>
      <View style = { styles.container }>
        <Image
          source = { Logo }
          alt = 'Swipe Away Logo'
          style = {[ styles.logo, { height: height * 0.3 }]}
        />
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
      </View>
    </TouchableWithoutFeedback>
  );
};

const HomeScreen = ({ setAuth }) => {
  return(
    <>
      <Text style = {{textAlign: 'center', textAlignVertical: 'center'}}>Success!</Text>
      <CustomButton
        text = { 'Sign Out' }
        onPress = { () => setAuth('') }
      />
    </>
  )
};

const App = () => {
  const [ auth, setAuth ] = React.useState('');
  
  return (
    <SafeAreaView style = { SafeViewAndroid.AndroidSafeArea }>
      <StatusBar style = 'auto' />
      { auth && <HomeScreen setAuth = { setAuth }/>}
      { auth === '' && <SignInScreen setAuth = { setAuth }/>}
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    marginBottom: 80,
},
});

export default App;