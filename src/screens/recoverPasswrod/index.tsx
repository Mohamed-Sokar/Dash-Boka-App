import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, DescriptionText, InputField} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {RecoverPasswordScreenNavigationProp} from '../../navigation/type';
const RecoverPassword: FC = () => {
  const {navigate, goBack} =
    useNavigation<RecoverPasswordScreenNavigationProp>();
  return (
    <View style={styles.container}>
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
        />
      </View>
      <View style={styles.btnWrapper}>
        <Button
          title="Get recovery code"
          onPress={() => navigate('SetPassword')}
        />
      </View>
    </View>
  );
};
export default RecoverPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    marginTop: 24,
  },
  btnWrapper: {
    marginTop: 41,
  },
});
