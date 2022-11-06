import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import svgIcons from '../../assets/Icons';
import Colors from '../../themes/Colors';
import {
  Button,
  DescriptionText,
  InputField,
  MissCodeText,
  PasswordRequirments,
  HeaderAction,
} from '../../components';
import {Formik} from 'formik';
import {SvgXml} from 'react-native-svg';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../navigation/type';
import {forgotPasswordSubmit} from '../../AWS';

const DescText: FC = () => {
  return (
    <Text style={styles.descText}>
      Code has been sent to
      <Text style={styles.highLightText}> m***@***.com </Text>
      Enter recover code and new password.
    </Text>
  );
};

const SetPassword: FC = () => {
  const {goBack} = useNavigation<LoginScreenNavigationProp>();
  const route = useRoute();
  const {email} = route.params as {email: string};

  return (
    <Formik
      initialValues={{code: '', password: ''}}
      onSubmit={values => {
        console.log(values);
        forgotPasswordSubmit(email, values.code, values.password);
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.navigationBtn}>
            <HeaderAction title="Back" onPress={() => goBack()} />
          </View>
          <DescriptionText
            mainText="Set New Password"
            descTextComponent={<DescText />}
          />
          <InputField
            title="Recovery code"
            placeholder="0 0 0 0 0 0 0"
            onChangeText={handleChange('code')}
            onBlur={() => handleBlur('code')}
            value={values.code}
            keyboardType="numeric"
          />
          <MissCodeText />
          <InputField
            title="New Password"
            placeholder="• • • • • • • • • • • •"
            isSecure={true}
            Icon={<SvgXml xml={svgIcons.eyeoIcon} />}
            onChangeText={handleChange('password')}
            onBlur={() => handleBlur('password')}
            value={values.password}
          />
          <PasswordRequirments />
          <Button title="Reset Password" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
export default SetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  navigationBtn: {
    marginVertical: 15,
  },
  descText: {
    fontSize: 18,
    color: Colors.gray[500],
    fontWeight: '400',
    lineHeight: 25.2,
  },
  highLightText: {
    color: Colors.gray[900],
  },
});
