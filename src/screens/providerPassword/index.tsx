import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import svgIcons from '../../assets/Icons';
import {PasswordRequirments} from '../../components';
import {Formik} from 'formik';

import {
  DescriptionText,
  Button,
  InputField,
  SocialMedia,
} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ProviderPasswordScreenNavigationProp} from '../../navigation/type';
import {signUp} from '../../AWS';

const ProviderPassword: FC = () => {
  const {navigate} = useNavigation<ProviderPasswordScreenNavigationProp>();
  const route = useRoute();
  const {email} = route.params as {email: string}; // this is the email from the previous screen

  const navigateToConfirmAccountScreen = (username: string) => {
    navigate('ConfirmAccount', {username});
  };

  return (
    <Formik
      initialValues={{
        password: '',
      }}
      onSubmit={values => {
        signUp(navigateToConfirmAccountScreen, values.password, email);
      }}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <DescriptionText
              mainText="Become a Provider On Boka"
              descText="Set your password to use it when login to your account"
            />
            <InputField
              title="Password"
              placeholder="• • • • • • • • • • • •"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              isSecure={true}
              Icon={<SvgXml xml={svgIcons.eyeoIcon} />}
            />
            <PasswordRequirments />
            <Button title="Create account" onPress={handleSubmit} />
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
      )}
    </Formik>
  );
};
export default ProviderPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
