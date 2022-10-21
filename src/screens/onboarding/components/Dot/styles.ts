import {StyleSheet} from 'react-native';
import Colors from '../../../../themes/Colors';

const styles = StyleSheet.create({
  mainDotContainer: {
    marginHorizontal: 8,
    borderRadius: 8 / 2,
    alignSelf: 'center',
  },
  primaryBullet: {
    height: 8,
    width: 8,
    backgroundColor: Colors.primary.dark,
  },
  grayBullet: {
    height: 8,
    width: 8,
    backgroundColor: Colors.gray[100],
  },
});

export default styles;
