import {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import svgIcons from '../../assets/Icons';
import {
  DescriptionText,
  InputField,
  Button,
  SocialMedia,
} from '../../components/index';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../navigation/type';

const Login: FC = () => {
  const {navigate, goBack} = useNavigation<LoginScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <DescriptionText
          mainText="Welcome Back!"
          descText="Get your business updates."
        />
        <InputField
          placeholder="Enter your email or phone"
          title="Email / Phone"
        />
        <InputField
          placeholder="Enter your email or phone"
          title="Password"
          Icon={<SvgXml xml={svgIcons.eyeoIcon} />}
          isSecure={true}
        />
        <TouchableOpacity onPress={() => navigate('RecoverPassword')}>
          <Text style={{alignSelf: 'flex-end'}}>Forget Password?</Text>
        </TouchableOpacity>
        <Button title="Login" />
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
