import { StatusBar, StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});