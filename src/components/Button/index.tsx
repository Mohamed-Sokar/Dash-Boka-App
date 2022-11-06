import {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
interface Props {
  title: string;
  onPress?: () => void;
  style?: object;
  disabled?: boolean;
}

const Button: FC<Props> = ({title, onPress, style}) => {
  return (
    <>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
