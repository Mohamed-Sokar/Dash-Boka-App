import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  mainText: {
    fontSize: 22,
    color: Colors.gray[900],
    fontWeight: '700',
    lineHeight: 30.8,
    marginBottom: 4,
  },
  descText: {
    fontSize: 18,
    color: Colors.gray[500],
    fontWeight: '400',
  },
});

export default styles;
