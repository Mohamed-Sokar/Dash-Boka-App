import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  button: {
    color: Colors.primary.dark,
    width: '100%',
    backgroundColor: Colors.primary.dark,
    height: 48,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: Colors.common.black,
    lineHeight: 25.2,
    fontWeight: '500',
  },
});

export default styles;
