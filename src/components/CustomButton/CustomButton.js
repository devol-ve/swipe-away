import * as React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor, disabled = false, image }) => {
    return (
        <Pressable 
            disabled={disabled}
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
            ]}>
            {image && <Image source={image} style={StyleSheet.image} />}
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {},
            ]}>
                { text }
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        padding: 15,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#356FF5',
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    text_TERTIARY: {
        color: '#0E1A1F',
    },

    image: {
        width: 40,
        height: 40,
        marginLeft: -90,
        marginRight: 50,
    },
});

export default CustomButton;