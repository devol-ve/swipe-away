import { View, TextInput, StyleSheet } from 'react-native';
import styles from 'styles';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, isValid = true }) => {
    return (
        <View style = {[ styles.inputContainer, isValid ? {} : { borderColor: '#f00' }]} >
            <TextInput
                value = { value }
                onChangeText = { setValue }
                placeholder = { placeholder }
                secureTextEntry = { secureTextEntry }
                style = { styles.input }
            />
        </View>
    );
};

export default CustomInput;