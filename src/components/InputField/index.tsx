import {FC, ReactNode} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
interface InputFieldProps {
  title: string;
  placeholder: string;
  Icon?: ReactNode;
  isSecure?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

const InputField: FC<InputFieldProps> = ({
  title,
  placeholder,
  Icon,
  isSecure,
  value,
  onChangeText,
  onBlur,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapper}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={isSecure}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          keyboardType={keyboardType}
        />
        {Icon}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.gray[200],
    borderRadius: 8,
    height: 75,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: '100%',
  },
  title: {
    color: Colors.gray[500],
    fontsize: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22.4,
  },
  wrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
