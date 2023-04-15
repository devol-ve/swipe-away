import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

// !! Temporary !!
  albumCover: {
    height: 180,
    width: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 10,
  },

  button: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button_PRIMARY: {
    borderRadius: 5,
    backgroundColor: '#356FF5',
  },
  
  button_TERTIARY: {},
  
  buttonContainer: {
    width: '100%',
    height: 50,
    marginVertical: 5,
    flexDirection: 'row',
  },

  buttonImage: {
    width: 40,
    height: 40,
    marginLeft: -90,
    marginRight: 50,
  },
  
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  buttonText_TERTIARY: {
    color: '#0E1A1F',
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  image: {
    height: 270,
    width: 180,
  }, 

  inputContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 50,
    justifyContents: 'center',

    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },

  input: {
      flex: 1,
      paddingHorizontal: 15,
  },

  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    marginBottom: 80,
  },

});

export default styles;