import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  OnboardingScreen,
  LoginScreen,
  ProviderEmailScreen,
  ProviderPasswordScreen,
  ConfirmAccountScreen,
  RecoverPasswordScreen,
  SetPasswordScreen,
  HomeScreen,
} from '../screens';
import {RootStackParamList} from './type';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation: FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>('Not_User');
  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(token => setAccessToken(token))
      .catch(err => console.log(err));
  }, [accessToken]);

  return (
    <>
      {accessToken !== 'Not_User' ? (
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName={accessToken === null ? 'Onboarding' : 'Home'}
            screenOptions={{headerShown: false}}>
            <RootStack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen
              name="ProviderEmail"
              component={ProviderEmailScreen}
            />
            <RootStack.Screen
              name="ProviderPassword"
              component={ProviderPasswordScreen}
            />
            <RootStack.Screen
              name="ConfirmAccount"
              component={ConfirmAccountScreen}
            />
            <RootStack.Screen
              name="RecoverPassword"
              component={RecoverPasswordScreen}
            />
            <RootStack.Screen
              name="SetPassword"
              component={SetPasswordScreen}
            />
            <RootStack.Screen name="Home" component={HomeScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      ) : null}
    </>
  );
};

export default StackNavigation;
