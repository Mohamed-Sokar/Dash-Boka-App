import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import React, {FC} from 'react';
import styles from './styles';

interface Props {
  icon: string;
  mainText: string;
  subText: string;
}
const OnboardingItem: FC<Props> = ({icon, mainText, subText}) => {
  return (
    <View style={styles.item}>
      <SvgXml xml={icon} style={{alignSelf: 'center', marginTop: 100}} />
      <Text style={[styles.text, styles.mainText]}>{mainText}</Text>
      <Text style={[styles.text, styles.subText]}>{subText}</Text>
    </View>
  );
};

export default OnboardingItem;
