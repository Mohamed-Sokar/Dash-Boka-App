import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {
  OnboardingScreen,
  LoginScreen,
  ProviderEmailScreen,
  ProviderPasswordScreen,
  ConfirmAccountScreen,
  RecoverPasswordScreen,
  SetPasswordScreen,
} from '../screens';
import {RootStackParamList} from './type';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Onboarding">
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
        <RootStack.Screen name="SetPassword" component={SetPasswordScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
