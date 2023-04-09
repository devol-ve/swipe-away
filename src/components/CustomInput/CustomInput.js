import { View, TextInput, StyleSheet } from 'react-native';
import styles from '@styles';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style = { styles.inputContainer } >
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