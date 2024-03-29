import * as React from 'react';
import {
  Image,
  useWindowDimensions,
  View, 
} from 'react-native';
import Logo from 'assets/logo.png';
import styles from 'styles';

const SplashScreen = () => {
  const { height } = useWindowDimensions();
  
  return (
    <View style = { styles.container }>
      <Image
        source = { Logo }
        alt = 'Loading'
        style = {[ styles.logo, { height: height * 0.3 }]}
      />
    </View>
  );
};

export default SplashScreen;