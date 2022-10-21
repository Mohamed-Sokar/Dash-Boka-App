import {FC, ReactNode} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
interface Props {
  mainText: string;
  descText?: string;
  descTextComponent?: ReactNode;
}
const DescriptionText: FC<Props> = ({
  mainText,
  descText,
  descTextComponent,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{mainText}</Text>
      <Text style={styles.descText}>{descText}</Text>
      {descTextComponent}
    </View>
  );
};
export default DescriptionText;
