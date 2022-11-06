import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './src/navigation/StackNavigation';
import React, {useEffect} from 'react';
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <StackNavigation />;
};

export default App;
