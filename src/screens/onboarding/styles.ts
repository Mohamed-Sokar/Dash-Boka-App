import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsFlatList: {
    backgroundColor: Colors.common.white,
    // flex: 1,
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: 215,
    bottom: 0,
    paddingHorizontal: 20,
  },
  dotsFlatList: {
    top: 20,
    flex: 1,
    justifyContent: 'center',
    height: 8,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    bottom: 45,
    color: 'black',
    lineHeight: 25.2,
    fontWeight: '500',
  },
  button: {
    top: -60,
  },
});
export default styles;
