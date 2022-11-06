import {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/Icons';

import Colors from '../../themes/Colors';

interface HeaderActionProps {
  title: string;
  onPress?: () => void;
}

const HeaderAction: FC<HeaderActionProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SvgXml xml={Icons.backIcon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default HeaderAction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.gray[600],
    lineHeight: 22.4,
  },
});
