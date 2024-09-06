import { Platform, Pressable, StyleSheet, Text } from "react-native"

interface PrimaryButtonProps {
    onPress?: () => void;
    onLongPress?: () => void;
    label: string;
}

export const PrimaryButton = ({onPress, onLongPress, label}: PrimaryButtonProps) => {
  return (
    <Pressable onPress={() => onPress && onPress()}
        onLongPress={() => onLongPress && onLongPress()}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
        <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: Platform.OS === 'android' ? 'white' : '#4746AB',
        fontSize: 20
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
    }
});
