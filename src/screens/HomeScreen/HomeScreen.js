import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomButton from '@components/CustomButton';
import AuthContext from '@context/AuthContext';
import styles from '@styles';

const MainScreen = () => {
  return (
    <View style = { styles.container }>
      <Text>Main Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style = { styles.container }>
      <Text>Screen Screen</Text>
      <CustomButton
        text = { 'Sign Out' }
        onPress = { signOut }
        type = { 'TERTIARY' }
      />
    </View>
  );
};

const GroupScreen = () => {
  return (
    <View style = { styles.container }>
      <Text>Group Screen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName = 'Main'
        screenOptions={{
          tabBarIconStyle: { display: 'none' },
          tabBarInactiveTintColor: '#C2E7F0',
      }}>
        <Tab.Screen name = 'Profile' component = { ProfileScreen }/>
        <Tab.Screen name = 'Main' component = { MainScreen } options={{ headerShown: false,  }} />
        <Tab.Screen name = 'Groups' component = { GroupScreen }/>
      </Tab.Navigator>
    </>
  );
};

export default HomeScreen;