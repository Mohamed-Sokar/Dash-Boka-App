import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {
  Button,
  DescriptionText,
  InputField,
  MissCodeText,
} from '../../components';
import DescText from './components/DescText';

const ConfirmAccount: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.verificationWrapper}>
        <DescriptionText
          mainText="Account verification"
          descTextComponent={<DescText />}
        />
        <InputField placeholder="0 0 0 0 0 0 0" title="Confirmation code" />
        <MissCodeText />
      </View>
      <View style={styles.btnWrapper}>
        <Button title="Confirm" />
      </View>
    </View>
  );
};

export default ConfirmAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  verificationWrapper: {
    flex: 0.4,
    justifyContent: 'space-evenly',
  },
  btnWrapper: {
    flex: 0.55,
    justifyContent: 'space-between',
  },
});
