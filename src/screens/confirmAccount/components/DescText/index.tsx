import {StyleSheet, View, Text} from 'react-native';
import React, {FC} from 'react';
import Colors from '../../../../themes/Colors';

const DescText: FC = () => {
  return (
    <Text style={styles.descText}>
      Fill the verification code that has been sent to
      <Text style={styles.highLightText}> +1-613-555-0110 </Text>
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
