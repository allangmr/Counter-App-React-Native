import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d1d1',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        columnGap: 10,
    },
    box: {
        // flex: 1,
        width: 100,
        height: 100,
    },
    box1: {
        backgroundColor: '#5856D6',
    },
    box2: {
        backgroundColor: '#8987e2',
        // alignSelf: 'flex-end',
    },
    box3: {
        backgroundColor: '#a2a1d1',
        // alignSelf: 'center',
    }
})