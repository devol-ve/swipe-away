import * as React from 'react';
import {
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View, 
} from 'react-native';
import styles from '@styles';
import CustomButton from '@components/CustomButton';
import CustomInput from '@components/CustomInput';
import Logo from '@assets/logo.png';

const SignUpScreen = ({ setAuth }) => {
  const { height } = useWindowDimensions();
  const [ username, setUsername ] = React.useState('');
  const [ firstName, setFirstName ] = React.useState('');
  const [ lastName, setLastName ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const [ confirmPassword, setConfirmPassword ] = React.useState('');

  const onFormSubmission = () => {
    console.log( 'Username: ', username );
    console.log( 'First Name: ', firstName);
    console.log( 'Last Name: ', lastName);
    console.log( 'Password: ', password );
    console.log( 'Confirmed: ', ( password === confirmPassword ));
    setAuth( 'sample-token' );
  };

  const onSignIn = () => {
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
          value = { firstName }
          setValue = { setFirstName }
          placeholder = { 'First Name' }
        />
        <CustomInput
          value = { lastName }
          setValue = { setLastName }
          placeholder = { 'Last Name' }
        />
        <CustomInput
          value = { password }
          setValue = { setPassword }
          placeholder = { 'Set Password' }
          secureTextEntry
        />
        <CustomInput
          value = { confirmPassword }
          setValue = { setConfirmPassword }
          placeholder = { 'Confirm Password' }
          secureTextEntry
        />
        <CustomButton
          text = { 'Sign Up' }
          onPress = { onFormSubmission }
        />
        <Text>Already have an account?</Text>
        <CustomButton
          text = { 'Sign In' }
          onPress = { onSignIn }
          type = { 'TERTIARY' }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;