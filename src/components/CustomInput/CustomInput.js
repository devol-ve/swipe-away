import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style = { styles.container } >
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 50,
        justifyContents: 'center',

        borderColor: '#DEDEDE',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },

    input: {
        flex: 1,
        paddingHorizontal: 15,
    },
});

export default CustomInput;