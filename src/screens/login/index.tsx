import {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import svgIcons from '../../assets/Icons';
import {Formik} from 'formik';
import {
  DescriptionText,
  InputField,
  Button,
  SocialMedia,
} from '../../components/index';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../navigation/type';
import {signIn} from '../../AWS';

const Login: FC = () => {
  const {navigate} = useNavigation<LoginScreenNavigationProp>();
  const navigateToHomeScreen = () => {
    navigate('Home');
  };
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => {
        signIn(values.email, values.password, navigateToHomeScreen);
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <DescriptionText
              mainText="Welcome Back!"
              descText="Get your business updates."
            />
            <InputField
              placeholder="Enter your email or phone"
              title="Email / Phone"
              onChangeText={handleChange('email')}
              onBlur={() => handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            <InputField
              placeholder="Enter your email or phone"
              title="Password"
              onChangeText={handleChange('password')}
              onBlur={() => handleBlur('password')}
              value={values.password}
              Icon={<SvgXml xml={svgIcons.eyeoIcon} />}
              isSecure={true}
            />
            <TouchableOpacity onPress={() => navigate('RecoverPassword')}>
              <Text style={{alignSelf: 'flex-end'}}>Forget Password?</Text>
            </TouchableOpacity>
            <Button title="Login" onPress={handleSubmit} />
          </View>
          <View>
            <SocialMedia
              title="Login using"
              leftText="New here? "
              linkText="Create account"
              onPress={() => navigate('ProviderEmail')}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  wrapper: {
    flex: 0.75,
    justifyContent: 'space-around',
  },
});
