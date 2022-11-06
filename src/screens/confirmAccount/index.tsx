import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {
  Button,
  DescriptionText,
  InputField,
  MissCodeText,
  HeaderAction,
} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../navigation/type';
import {Formik} from 'formik';
import DescText from './components/DescText';
import {confirmSignUp, resendConfirmationCode} from '../../AWS';
import Colors from '../../themes/Colors';

const ConfirmAccount: FC = () => {
  const {goBack} = useNavigation<LoginScreenNavigationProp>();
  const route = useRoute();
  const {username} = route.params as {username: string}; // this is the username from the provider password screen

  return (
    <Formik
      initialValues={{
        code: '',
      }}
      onSubmit={values => {
        confirmSignUp(username, values.code);
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
          <View style={styles.navigationBtn}>
            <HeaderAction title="Back" onPress={() => goBack()} />
          </View>
          <View style={styles.verificationWrapper}>
            <DescriptionText
              mainText="Account verification"
              descTextComponent={<DescText />}
            />
            <InputField
              placeholder="0 0 0 0 0 0 0"
              title="Confirmation code"
              keyboardType="numeric"
              value={values.code}
              onChangeText={handleChange('code')}
              onBlur={() => setFieldTouched('code')}
            />
            <TouchableOpacity onPress={() => resendConfirmationCode(username)}>
              <Text style={styles.text}>Didn’t get the code?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnWrapper}>
            <Button title="Confirm" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ConfirmAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  navigationBtn: {
    marginTop: 15,
  },
  verificationWrapper: {
    flex: 0.4,
    justifyContent: 'space-evenly',
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22.4,
    color: Colors.gray[600],
  },
  btnWrapper: {
    flex: 0.55,
    justifyContent: 'space-between',
  },
});
