import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '@screens/SignInScreen';
import SignUpScreen from '@screens/SignUpScreen';
import SplashScreen from '@screens/SplashScreen';
import HomeScreen from '@screens/HomeScreen';
import AuthContext from '@context/AuthContext';
import styles from '@styles';


const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
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
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // console.error('Error %d: Unable to restore user token. ', e);
      };

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async ( data ) => {
        // send user credentials to server to retrieve token
        // handle errors
        // use SecureStore to persist token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async ( data ) => {
        // send user credentials to server to retrieve token
        // handle errors
        // use SecureStore to persist token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value = { authContext }>
      <NavigationContainer>
        <Stack.Navigator>
          { state.isLoading ? (
            <Stack.Screen name = 'Splash' component = { SplashScreen }/>
          ) : state.userToken == null ? (
            <>
              <Stack.Screen
                name = 'SignIn'
                component = { SignInScreen }
                options={{
                  headerShown: false,
                  contentStyle: styles,
                  title: 'Sign In',
                  animationTypeForReplace: state.isSignOut ? 'pop' : 'push',
                }}
                />
              <Stack.Screen
                name = 'SignUp'
                component = { SignUpScreen }
                options={{
                  headerShown: false,
                  title: 'Sign Up',
                  animationTypeForReplace: state.isSignOut ? 'pop' : 'push',
                }}
                />
            </>
          ) : (
            <Stack.Screen
              name = 'Home'
              component = { HomeScreen }
              options={{
                headerShown: false,
              }}
            />
        )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;