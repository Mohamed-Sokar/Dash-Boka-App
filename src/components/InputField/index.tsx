import {FC, ReactNode} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

interface InputFieldProps {
  title: string;
  placeholder: string;
  Icon?: ReactNode;
  isSecure?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  title,
  placeholder,
  Icon,
  isSecure,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapper}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={isSecure}
        />
        {Icon}
      </View>
    </View>
  );
};

export default InputField;
