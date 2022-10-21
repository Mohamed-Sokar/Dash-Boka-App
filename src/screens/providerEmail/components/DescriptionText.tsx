import {StyleSheet, Text} from 'react-native';
import Colors from '../../../themes/Colors';

const DescriptionText = () => {
  return (
    <Text style={[styles.text, styles.descText]}>
      Creating an account means you are agree with Boka’s
      <Text style={[styles.text, styles.linkText]}> Privacy policy</Text> &
      <Text style={[styles.text, styles.linkText]}> Term of use</Text>
    </Text>
  );
};

export default DescriptionText;

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22.4,
  },
  descText: {
    color: Colors.gray[800],
  },
  linkText: {
    color: Colors.info.main,
  },
});
