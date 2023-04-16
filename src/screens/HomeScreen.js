import * as React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomButton } from 'components';
import { AuthContext } from 'context';
import styles from 'styles';

const MainScreen = () => {
  const [ cardsData ] = React.useState([
    { name: 'Crepes', src: { uri: 'https://images.pexels.com/photos/3225499/pexels-photo-3225499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }, price: '$5.00' },
    { name: 'Pancakes', src: { uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }, price: '$4.00' },
    { name: 'Waffles', src: { uri: 'https://images.pexels.com/photos/221063/pexels-photo-221063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }, price: '$4.50' },
    { name: 'Oatmeal', src: { uri: 'https://images.pexels.com/photos/4488082/pexels-photo-4488082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }, price: '$3.00' },
    { name: 'Salmon', src: {uri: 'https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }, price: '$25.00' },
    { name: 'Steak', src: { uri: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }, price: '$22.00' },
    { name: 'Salad', src: { uri: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }, price: '$12.00' },
    { name: 'Pasta', src: { uri: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }, price: '$18.00' },
    { name: 'Dark Side of The Moon', artist: 'Pink Floyd', src: {uri: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png' }, price: '$14.99' },
    { name: 'Plastic Beach', artist: 'Gorillaz', src: {uri: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg' }, price: '$16.99' },
    { name: 'The Search', artist: 'NF', src: {uri: 'https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png' }, price: '$10.98' },
    { name: 'Lighght', artist: 'Kishi Bashi', src: {uri: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Lighght_-_album_cover.jpg' }, price: '$14.98' },
    { name: 'Swiss Army Man', src: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MFR2j3GbNUXoUaZSPlkkbEbnKtn9WfuoHnyjGyjIrYPuN6F7' }, price: '$13.99' },
    { name: 'Everything Everywhere All at Once', src: { uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHXnPFszcpNapxaCWUSBl3LZezeb-9X_HUKcefCmNZfbPZzmZ5' }, price: '$7.59' },
    { name: 'Monty Python and the Holy Grail', src: { uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRApn9SAnMd2irMIB8djmkoQ6oO5M7BR3qli56ly6coVxOane7R' }, price: '$9.99' },
    { name: 'Source Code', src: { uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcQkRU-m9otcd788GwWIIEtuCiYmjfy8ySoUvEFxEqsAf9vhrD' }, price: '$5.80' },
  ])

  const { width, height } = useWindowDimensions();

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
        <Tab.Screen name = 'Main' component = { MainScreen } options={{ headerShown: false,  }} />
        <Tab.Screen name = 'Groups' component = { GroupScreen }/>
      </Tab.Navigator>
    </>
  );
};

export default HomeScreen;