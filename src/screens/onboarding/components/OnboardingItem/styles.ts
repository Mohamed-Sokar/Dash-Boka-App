import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../../themes/Colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  item: {
    width: width,
    paddingHorizontal: 20,
  },
  text: {
    alignSelf: 'flex-start',
    width: '100%',
    paddingHorizontal: 1,
  },
  mainText: {
    fontSize: 22,
    lineHeight: 30.8,
    fontWeight: '600',
    height: 31,
    marginBottom: 8,
    marginTop: 60,
    color: Colors.gray[800],
  },
  subText: {
    fontSize: 18,
    lineHeight: 25.2,
    fontWeight: '400',
    height: 75,
    color: Colors.gray[500],
  },
});

export default styles;
