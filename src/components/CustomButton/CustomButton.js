import * as React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text } from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor, disabled = false, image }) => {
    const animatedScale = React.useRef(new Animated.Value(0)).current;

    React.useEffect(()=> {
        animatedScale.setValue(1);
    }, []);

    const handleButtonPress = () => {
        animatedScale.setValue(type === 'PRIMARY' ? 0.97 : 0.94);
        Animated.spring(animatedScale, {
            toValue: 1,
            bounciness: 14,
            speed: 2,
            useNativeDriver: true,
        }).start();
        onPress();
    };

    return (
        <Pressable 
            disabled = { disabled }
            onPress = { handleButtonPress }
            style = {[
                styles.container,
            ]}>
            <Animated.View
                style = {[
                    styles.button, 
                    { transform: [{ scale: animatedScale }]},
                    styles[ `button_${type}` ],
                    bgColor ? { backgroundColor: bgColor } : {},
                ]}>
                { image && <Image source = { image } style = { StyleSheet.image } /> }
                <Text style = {[
                    styles.text,
                    styles[ `text_${type}` ],
                    fgColor ? { color: fgColor } : {},
                ]}>
                    { text }
                </Text>
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    
    container: {
        width: '100%',
        height: 50,
        marginVertical: 5,
        flexDirection: 'row',
    },
    
    button: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    button_PRIMARY: {
            borderRadius: 5,
            backgroundColor: '#356FF5',
    },

    button_TERTIARY: {},

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