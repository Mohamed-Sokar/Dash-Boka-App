import {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
interface Props {
  title: string;
  onPress?: () => void;
}

const Button: FC<Props> = ({title, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
