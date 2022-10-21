import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DescriptionText,
  Button,
  InputField,
  SocialMedia,
} from '../../components/index';
import Desc from './components/DescriptionText';
import {useNavigation} from '@react-navigation/native';
import {ProviderEmailScreenNavigationProps} from '../../navigation/type';

const ProviderEmail: FC = () => {
  const {navigate, goBack} =
    useNavigation<ProviderEmailScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <DescriptionText
          mainText="Become a Provider On Boka"
          descText="Welcome to Boka! Enter your email or Phone to get started."
        />
        <InputField title="Email / Phone" placeholder="example@email.com" />
        <Desc />
        <Button title="Continue" onPress={() => navigate('ProviderPassword')} />
      </View>
      <View>
        <SocialMedia
          title="Create using"
          leftText="Already have account?"
          linkText=" Login"
          onPress={() => navigate('Login')}
        />
      </View>
    </View>
  );
};
export default ProviderEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 0.8,
    justifyContent: 'space-evenly',
  },
});
