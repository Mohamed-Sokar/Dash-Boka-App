import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../themes/Colors';

const MissCodeText: FC = () => {
  return (
    <View style={styles.textWrapper}>
      <Text style={[styles.text, styles.leftText]}>Didn’t get the code?</Text>
      <Text style={[styles.text, styles.rightText]}> 30 Sec</Text>
    </View>
  );
};

export default MissCodeText;

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22.4,
  },
  leftText: {
    color: Colors.gray[600],
  },
  rightText: {
    color: Colors.info.main,
  },
});
