import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components";
import { Button } from "react-native-paper";

export const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{counter}</Text>
        <View style={styles.buttonContainer}>
            {/* <PrimaryButton onPress={() => setCounter(counter + 1)} 
                onLongPress={() => setCounter(0) }
                label='UP'
            >
            </PrimaryButton>
            <PrimaryButton onPress={() => { counter > 0 && setCounter(counter - 1)}} 
                onLongPress={() => setCounter(0) }
                label='DOWN'
            >
            </PrimaryButton> */}
            <Button onPress={() => setCounter(counter + 1)} 
                onLongPress={() => setCounter(0) }
                mode="contained"
                style={styles.button}
            >
                UP
            </Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        width: '100%',
        padding: 20
    },
    button: {
        backgroundColor: '#d68956',
    }
});
