import * as React from 'react';
import {
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View, 
} from 'react-native';
import { CustomButton, CustomInput } from 'components';
import { AuthContext } from 'context';
import Logo from 'assets/logo.png';
import styles from 'styles';

const SignInScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [ uname, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  //console.log(route.params)
  const onSignIn = () => {
    console.log( 'Username: ', uname );
    console.log( 'Password: ', password );
    signIn({ uname, password })
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
          value = { uname }
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
        <Text>Don&apos;t have an account yet?</Text>
        <CustomButton
          text = { 'Sign Up' }
          onPress = { () => navigation.navigate('SignUp') }
          type = { 'TERTIARY' }
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

export default SignInScreen;