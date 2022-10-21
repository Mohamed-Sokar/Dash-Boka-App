import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  ProviderEmail: undefined;
  ProviderPassword: undefined;
  ConfirmAccount: undefined;
  RecoverPassword: undefined;
  SetPassword: undefined;
};

export type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;
export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
export type ProviderEmailScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ProviderEmail'
>;
export type ProviderPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProviderPassword'
>;
export type ConfirmAccountScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ConfirmAccount'
>;
export type RecoverPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RecoverPassword'
>;
export type SetPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SetPassword'
>;
