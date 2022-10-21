import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {SvgXml} from 'react-native-svg';
import svgIcons from '../../assets/Icons';
import styles from './styles';

const PasswordRequirments: FC = () => {
  return (
    <View>
      <Text style={styles.mainText}>Strong password requirments</Text>
      <View style={styles.container}>
        <SvgXml xml={svgIcons.checkIcon} />
        <Text style={styles.text}>{'  '}At least 8 characters</Text>
      </View>
      <View style={styles.container}>
        <SvgXml xml={svgIcons.checkIcon} />
        <Text style={styles.text}>{'  '}Use lowercase letters</Text>
      </View>
      <View style={styles.container}>
        <SvgXml xml={svgIcons.checkIcon} />
        <Text style={styles.text}>{'  '}Use uppercase letters</Text>
      </View>
      <View style={styles.container}>
        <SvgXml xml={svgIcons.checkIcon} />
        <Text style={styles.text}>{'  '}Use special character e.g, @ $ #</Text>
      </View>
    </View>
  );
};

export default PasswordRequirments;
