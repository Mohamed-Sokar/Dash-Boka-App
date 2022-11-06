import {useNavigation} from '@react-navigation/native';
import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from '../../../../components/Button';
import {OnboardingScreenNavigationProp} from '../../../../navigation/type';
import styles from './styles';

const Login: FC = ({}) => {
  const {navigate} = useNavigation<OnboardingScreenNavigationProp>();

  return (
    <>
      <View style={styles.button}>
        <Button title="login" onPress={() => navigate('Login')} />
      </View>
      <Button
        style={styles.text}
        title="Become a provider"
        onPress={() => navigate('ProviderEmail')}
      />
      {/* <TouchableOpacity onPress={() => navigate('ProviderEmail')}>
        <Text style={styles.text}>Become a provider</Text>
      </TouchableOpacity> */}
    </>
  );
};

export default Login;
