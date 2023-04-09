import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import CustomButton from '@components/CustomButton';
import SafeViewAndroid from '@components/SafeViewAndroid';
import SignInScreen from '@screens/SignInScreen';




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

export default App;