import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import svgIcons from '../../assets/Icons';
import {PasswordRequirments} from '../../components';

import {
  DescriptionText,
  Button,
  InputField,
  SocialMedia,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {ProviderPasswordScreenNavigationProp} from '../../navigation/type';

const ProviderPassword: FC = () => {
  const {navigate, goBack} =
    useNavigation<ProviderPasswordScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <DescriptionText
          mainText="Become a Provider On Boka"
          descText="Set your password to use it when login to your account"
        />
        <InputField
          title="Password"
          placeholder="• • • • • • • • • • • •"
          Icon={<SvgXml xml={svgIcons.eyeoIcon} />}
          isSecure={true}
        />
        <PasswordRequirments />
        <Button
          title="Create account"
          onPress={() => navigate('ConfirmAccount')}
        />
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
