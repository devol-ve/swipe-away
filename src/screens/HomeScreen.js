import * as React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomButton } from 'components';
import { AuthContext } from 'context';
import styles from 'styles';

const MainScreen = () => {
  const [ cardsData ] = React.useState([
    { name: 'Grizzly\'s', src: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfzdb0RYtI-4qEBSC1ekpBwSG51wNo9GFwA&usqp=CAU' }, likes: 1 },
    { name: 'Perkin\'s', src: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVQp77aMNLHd6SpgZdyGao-rA6nNOI36irg&usqp=CAU' }, likes: 0 },
    { name: 'Applebee\'s', src: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpkAFerov6BYKwPTgIN_m9F3RMDXXYhaqaw&usqp=CAU' }, likes: 0 },
    { name: 'Fuji', src: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZfUJASc3eYXO3HGBHrG_y_Izw58AdngkGw&usqp=CAU' }, likes: 2 },
    { name: 'Red Robin', src: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-2swnbcJ443N64mUBuaqDlgLYdAdDBizQw&usqp=CAU' }, likes: 2 },
  ])

  const { width, height } = useWindowDimensions();

  const handleRightSwipe = ( card ) => {
    let likes = card.likes + 1;
    if( likes === myGroup.size ) {

    }
  }

  return (
    <View style = { styles.container }>
      <Swiper
        cards = { cardsData }
        verticalSwipe = { false }
        horizontalThreshold = { width / 3 }
        stackSize = { 2 }
        stackSeparation = { 2 }
        renderCard = { card => (
          <View style = {[ styles.card, { width: 350, height: height * 0.7, maxHeight: width * 2 }]}>
            <Image
              style = { card.artist ? styles.albumCover : styles.image }
              resizeMode = { 'cover' }
              source = { card.src }
              />
            <Text style = { styles.cardText }>{ card.name }</Text>
          </View>
        )}
      />
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
          tabBarLabelPosition: 'beside-icon',
          tabBarIconStyle: { display: 'none' },
          tabBarInactiveTintColor: '#C2E7F0',
      }}>
        <Tab.Screen name = 'Profile' component = { ProfileScreen }/>
        <Tab.Screen name = 'Main' component = { MainScreen } options={{ headerShown: false }} />
        <Tab.Screen name = 'Groups' component = { GroupScreen }/>
      </Tab.Navigator>
    </>
  );
};

export default HomeScreen;