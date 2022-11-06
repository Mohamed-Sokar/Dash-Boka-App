import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Button,
  DescriptionText,
  InputField,
  HeaderAction,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {RecoverPasswordScreenNavigationProp} from '../../navigation/type';
import {Formik} from 'formik';
import {forgotPassword} from '../../AWS';
import {string} from 'yup';
const RecoverPassword: FC = () => {
  const {navigate} = useNavigation<RecoverPasswordScreenNavigationProp>();
  const navigationToSetPasswordScreen = (email: string) => {
    navigate('SetPassword', {email: email});
  };
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={values => {
        forgotPassword(values.email, navigationToSetPasswordScreen);
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.navigationBtn}>
            <HeaderAction title="Login" onPress={() => navigate('Login')} />
          </View>
          <View>
            <DescriptionText
              mainText="Recover Password"
              descText="We will send you a code to reset your password."
            />
          </View>
          <View style={styles.inputWrapper}>
            <InputField
              title="Email / Phone"
              placeholder="Enter your email or phone"
              onChangeText={handleChange('email')}
              onBlur={() => handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.btnWrapper}>
            <Button
              title="Get recovery code"
              // onPress={() => navigate('SetPassword')}
              onPress={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
export default RecoverPassword;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  navigationBtn: {
    marginVertical: 15,
  },
  inputWrapper: {
    marginTop: 24,
  },
  btnWrapper: {
    marginTop: 41,
  },
});
