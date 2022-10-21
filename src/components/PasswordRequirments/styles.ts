import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  mainText: {
    marginBottom: 4,
    fontWeight: '500',
    fontsize: 14,
    lineHeight: 19.6,
    color: Colors.gray[500],
  },
  container: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontsize: 16,
    lineHeight: 22.4,
    color: Colors.gray[500],
    marginBottom: 3,
  },
});
export default styles;
