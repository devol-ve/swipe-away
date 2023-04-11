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

const SignUpScreen = ({ navigation }) => {
  const { signUp } = React.useContext( AuthContext );
  const { height } = useWindowDimensions();
  const [ username, setUsername ] = React.useState('');
  const [ firstName, setFirstName ] = React.useState('');
  const [ lastName, setLastName ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const [ confirmPassword, setConfirmPassword ] = React.useState('');
  
  let isMatch = true;

  const onFormSubmission = () => {
    isMatch = ( password === confirmPassword );
    console.log( 'Username: ', username );
    console.log( 'First Name: ', firstName);
    console.log( 'Last Name: ', lastName);
    console.log( 'Password: ', password );
    console.log( 'Confirmed: ', ( isMatch ));
    isMatch ?
      signUp(
        username,
        firstName,
        lastName,
        password,
      ) : ( InvalidForm() );
  };

  const onSignIn = () => {
    console.log( 'Forgot Password' );
  };

  const InvalidForm = () => {
    return (
      <>
        { isMatch ? (
          <></>
          ) :
          (
          <Text style = {{color: '#f00'}}>
            Passwords do not match.
          </Text>
          )}
      </>
    )
  }

  return (
    <TouchableWithoutFeedback onPress = { Keyboard.dismiss } accessible = { false }>
      <View style = { styles.container }>
        <Image
          source = { Logo }
          alt = 'Swipe Away Logo'
          style = {[ styles.logo, { height: height * 0.3 }]}
        />
        <InvalidForm/>
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
          isValid = { isMatch }
        />
        <CustomInput
          value = { confirmPassword }
          setValue = { setConfirmPassword }
          placeholder = { 'Confirm Password' }
          secureTextEntry
          isValid = { false }
        />
        <CustomButton
          text = { 'Sign Up' }
          onPress = { onFormSubmission }
        />
        <Text>Already have an account?</Text>
        <CustomButton
          text = { 'Sign In' }
          onPress = { () => navigation.navigate('SignIn') }
          type = { 'TERTIARY' }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;