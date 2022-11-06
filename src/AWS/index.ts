import {Auth} from 'aws-amplify';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../navigation/type';

//signup ,signin and signout are in the same file

//signup
async function signUp(
  // username: string,
  action: Function,
  password: string,
  email?: string,
  phone_number?: string,
) {
  // !!email -> to convert email type to boolean
  const attributes = !!email ? {email} : {phone_number};
  const username = !!email ? email.slice(0, email.indexOf('@')) : 'test';

  await Auth.signUp({
    username: username,
    password,
    attributes: attributes,
  })
    .then(data => {
      Alert.alert('Success', 'Check your email for the confirmation code');
      console.log({data: data});
      action(username);
    })
    .catch(err => {
      Alert.alert('Error', err.message);
    });
}

async function confirmSignUp(username: string, code: string) {
  await Auth.confirmSignUp(username, code)
    .then(() => {
      Alert.alert('Success', 'Account confirmed');
      // console.log({data: data});
    })
    .catch(err => {
      Alert.alert('Error', err.message);
    });
}

async function resendConfirmationCode(username: string) {
  try {
    await Auth.resendSignUp(username);
    console.log('code resent successfully');
  } catch (err) {
    console.log('error resending code: ', err);
  }
}

//signin
async function signIn(email: string, password: string, action: Function) {
  const username = !!email ? email.slice(0, email.indexOf('@')) : 'test';
  await Auth.signIn(username, password)
    .then(data => {
      Alert.alert('Success', 'You are signed in');
      AsyncStorage.setItem('token', data.signInUserSession.idToken.jwtToken);
      action(); // to navigate to home screen
    })
    .catch(err => {
      Alert.alert('Error', err.message);
    });
}

//signout
async function signOut(action: Function) {
  await Auth.signOut()
    .then(data => {
      Alert.alert('success', 'you are signed out seccessfully');
      AsyncStorage.removeItem('token');
      action();
    })
    .catch(() => {});
}

//forgot password
async function forgotPassword(email: string, action: Function) {
  const username = !!email ? email.slice(0, email.indexOf('@')) : 'test';
  await Auth.forgotPassword(username)
    .then(() => {
      Alert.alert('Success', 'Check your email for the confirmation code');
      action();
    })
    .catch(err => {
      Alert.alert('Error', err.message);
    });
}

// forgot password submit
async function forgotPasswordSubmit(
  email: string,
  code: string,
  password: string,
) {
  const username = !!email ? email.slice(0, email.indexOf('@')) : 'test';
  await Auth.forgotPasswordSubmit(username, code, password)
    .then(() => {
      Alert.alert('Success', 'Password changed successfully');
    })
    .catch(err => {
      Alert.alert('Error', err.message);
    });
}

// async function forgotPasswordSubmit(
//   email: string,
//   code: string,
//   password: string,
//   action: Function,
// ) {
//   const username = !!email ? email.slice(0, email.indexOf('@')) : 'test';
//   await Auth.forgotPasswordSubmit(username, code, password)
//     .then(() => {
//       Alert.alert('Success', 'Password changed successfully');
//       action();
//     })
//     .catch(err => {
//       Alert.alert('Error', err.message);
//     });
// }

export {
  signUp,
  confirmSignUp,
  resendConfirmationCode,
  signIn,
  signOut,
  forgotPassword,
  forgotPasswordSubmit,
};
