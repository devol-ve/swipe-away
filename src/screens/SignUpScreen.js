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
  const [ uname, setUsername ] = React.useState('');
  const [ fname, setFirstName ] = React.useState('');
  const [ lname, setLastName ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const [ confirmPassword, setConfirmPassword ] = React.useState('');
  const [ isMatch, compare ] = React.useState( 'true' );
  

  const onFormSubmission = () => {
    compare( password === confirmPassword );
    console.log( 'Username: ', uname );
    console.log( 'First Name: ', fname );
    console.log( 'Last Name: ', lname );
    console.log( 'Password: ', password );
    console.log( 'Confirmed: ', ( isMatch ));
    isMatch ?
      signUp({
        uname,
        fname,
        lname,
        password,
      }) : ( InvalidForm() );
  };

  const InvalidForm = () => {
    return (
      <>
        { isMatch ? (
          <></>
          ) :
          (
          alert('The passwords do not match.')
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
          value = { uname }
          setValue = { setUsername }
          placeholder = { 'Username' }
        />
        <CustomInput
          value = { fname }
          setValue = { setFirstName }
          placeholder = { 'First Name' }
        />
        <CustomInput
          value = { lname }
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
          isValid = { isMatch }
        />
        <CustomButton
          text = { 'Sign Up' }
          onPress = { onFormSubmission }
        />
        <Text>Already have an account?</Text>
        <CustomButton
          text = { 'Sign In' }
          onPress = { () => navigation.navigate( 'SignIn' ) }
          type = { 'TERTIARY' }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;