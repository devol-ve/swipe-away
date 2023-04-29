import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen,
  SignInScreen,
  SignUpScreen,
  SplashScreen,
} from 'screens';
import { AuthContext } from 'context';
import * as SecureStore from 'expo-secure-store';


const Stack = createNativeStackNavigator();

const API_URL = 'http://34.133.26.195:8080';

const App = () => {

  const [ state, dispatch ] = React.useReducer(
    ( prevState, action ) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignOut: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null,
    }
  );
  
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync( 'userToken' );
      } catch ( e ) {
        console.error( 'Error %d: Unable to restore user token. ', e );
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async ( payload ) => {

        // send user credentials to server to retrieve token
        fetch( `${ API_URL }/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( payload ),
        })
        .then( async res => {
          try {
            const jsonRes = await res.json();
            switch ( res.status ) {
              case 200: { // SUCCESS
                await SecureStore.setItemAsync( 'userToken', jsonRes.token );
                dispatch({ type: 'SIGN_IN', token: jsonRes.token });
                break;
              }
              case 401: { // INVALID CREDENTIALS
                alert( jsonRes.message );
                break;
              }
              case 404: { // NOT FOUND
                alert( 'Username not found in database. Please try again.' )
                break;
              }
              case 502: { // ERROR WHILE CHECKING PASSWORD
                alert( 'Unable to verify.')
                break;
              }
              default: {
                console.error( 'UNKNOWN ERROR' );
              }
            }
            // handle errors
          } catch ( e ) {
            console.error( e )
          }
        })
        .catch (e => {
          console.error( e )
        });
          
      },
      signOut: async () => {
        try {
          await SecureStore.deleteItemAsync( 'userToken' );
          console.log ( 'User signed out.' );
          dispatch({ type: 'SIGN_OUT' })

        } catch ( e ) {
          alert( 'Unable to sign out. Please try again.' )
          console.error( e )
        }
      },
      signUp: async ( payload ) => {
        // send user credentials to server to retrieve token
        fetch( `${ API_URL }/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( payload ),
        })
        .then( async res => {
          try {
            const jsonRes = await res.json();
            switch ( res.status ) {
              case 200: { // SUCCESS
                await SecureStore.setItemAsync( 'userToken', jsonRes.token );
                dispatch({ type: 'SIGN_IN', token: jsonRes.token });
                break;
              }
              case 400: { // INCOMPLETE FORM
                alert( jsonRes.message );
                break;
              }
              case 409: { // USERNAME ALREADY EXISTS
                alert( jsonRes.message );
                break;
              }
              case 500: { // ERROR WHILE HASHING PASSWORD
                alert( 'ERROR: Unable to secure password. Please try again.')
                break;
              }
              case 502: { // ERROR WHILE CREATING THE USER
                alert( 'ERROR: Unable to create account. Please try again.')
                break;
              }
              default: {
                console.error( 'UNKNOWN ERROR' );
              }
            }
            // handle errors
          } catch ( e ) {
            console.error( e )
          }
        })
        .catch (e => {
          console.error( e )
        });

      },
    }),
    []
  );

  return (
    <AuthContext.Provider value = { authContext }>
      <NavigationContainer>
        <Stack.Navigator screenOptions = {{ headerShown: false }}>
          { state.isLoading ? (
            <Stack.Screen name = 'Splash' component = { SplashScreen }/>
          ) : ( state.userToken == null || state.userToken === 'null' || state.userToken === undefined || state.userToken === '' ) ? (
            <>
              <Stack.Screen
                name = 'SignIn'
                component = { SignInScreen }
                options = {{ animationTypeForReplace: state.isSignOut ? 'pop' : 'push' }}
                />
              <Stack.Screen
                name = 'SignUp'
                component = { SignUpScreen }
                options = {{ animationTypeForReplace: state.isSignOut ? 'pop' : 'push' }}
                />
            </>
          ) : (
            <Stack.Screen name = 'Home' component = { HomeScreen }/>
        )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;