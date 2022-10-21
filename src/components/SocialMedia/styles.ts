import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 16,
    color: Colors.gray[600],
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 12,
  },
  wrapper: {
    flexDirection: 'row',
  },
  leftText: {
    color: Colors.gray[800],
    fontSize: 18,
    lineHeight: 25.2,
  },
  linkText: {
    color: Colors.secondary.dark,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25.2,
  },
});

export default styles;
