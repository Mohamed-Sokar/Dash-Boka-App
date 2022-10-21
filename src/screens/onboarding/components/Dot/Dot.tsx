import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface Props {
  index: number;
  activeIndex: number;
}
const Dot: FC<Props> = ({index, activeIndex}) => {
  const customStyle =
    index === activeIndex ? styles.primaryBullet : styles.grayBullet;
  return <View style={[styles.mainDotContainer, customStyle]} />;
};

export default Dot;
