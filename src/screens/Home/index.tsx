import {View, Text, StyleSheet} from 'react-native';
import {FC} from 'react';
import {Button} from '../../components';
import {signOut} from '../../AWS';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../navigation/type';

const Home: FC = () => {
  const {navigate} = useNavigation<LoginScreenNavigationProp>();
  const navigateToLoginScreen = () => {
    navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Logout"
        onPress={() => {
          signOut(navigateToLoginScreen);
        }}
      />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 40,
  },
});
