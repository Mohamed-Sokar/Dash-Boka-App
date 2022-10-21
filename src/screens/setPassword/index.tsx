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
} from '../../components';
import {SvgXml} from 'react-native-svg';

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
  return (
    <View style={styles.container}>
      <DescriptionText
        mainText="Set New Password"
        descTextComponent={<DescText />}
      />
      <InputField title="Recovery code" placeholder="0 0 0 0 0 0 0" />
      <MissCodeText />
      <InputField
        title="New Password"
        placeholder="• • • • • • • • • • • •"
        isSecure={true}
        Icon={<SvgXml xml={svgIcons.eyeoIcon} />}
      />
      <PasswordRequirments />
      <Button title="Reset Password" />
    </View>
  );
};
export default SetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
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
