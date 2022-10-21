import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './src/navigation/StackNavigation';
import React, {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <StackNavigation />;
};

export default App;
