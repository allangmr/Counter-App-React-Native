import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.greenBox}></View>
        <View style={styles.purpleBox}></View>
        <View style={styles.orangeBox}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'relative',
        // top: 0,
        // bottom: 0,
        // left: 0,
        position: 'absolute',
        bottom: 0,
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        top: 0,
        right: 0,
        position: 'absolute',
    },
    greenBox: {
        // width: 100,
        // height: 100,
        backgroundColor: '#3bf086',
        borderWidth: 10,
        borderColor: 'white',
        // bottom: 0,
        // right: 0,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        ...StyleSheet.absoluteFillObject
    }
})