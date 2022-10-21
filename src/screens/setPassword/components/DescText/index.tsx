import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../../../themes/Colors';

const DescText: FC = () => {
  return (
    <Text style={styles.descText}>
      Code has been sent to
      <Text style={styles.highLightText}> m***@***.com </Text>
      Enter recover code and new password.
    </Text>
  );
};
export default DescText;

const styles = StyleSheet.create({
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
