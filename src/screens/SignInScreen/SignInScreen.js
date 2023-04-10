import * as React from 'react';
import {
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View, 
} from 'react-native';
import styles from '@styles';
import CustomButton from '@components/CustomButton';
import CustomInput from '@components/CustomInput';
import Logo from '@assets/logo.png';
import AuthContext from '@context/AuthContext';

const SignInScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  const onSignIn = () => {
    console.log( 'Username: ', username );
    console.log( 'Password: ', password );
    signIn({ username, password })
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