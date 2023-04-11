import * as React from 'react';
import { Animated, Image, Pressable, Text } from 'react-native';
import styles from 'styles';

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
                styles.buttonContainer,
            ]}>
            <Animated.View
                style = {[
                    styles.button, 
                    { transform: [{ scale: animatedScale }]},
                    styles[ `button_${type}` ],
                    bgColor ? { backgroundColor: bgColor } : {},
                ]}>
                { image && <Image source = { image } style = { styles.buttonImage } /> }
                <Text style = {[
                    styles.buttonText,
                    styles[ `buttonText_${type}` ],
                    fgColor ? { color: fgColor } : {},
                ]}>
                    { text }
                </Text>
            </Animated.View>
        </Pressable>
    );
};

export default CustomButton;