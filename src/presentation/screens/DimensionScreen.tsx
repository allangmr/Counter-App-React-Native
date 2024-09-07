import { StyleSheet, useWindowDimensions, View } from "react-native"
import {Dimensions} from 'react-native';
import { Text } from "react-native-paper";

// const {width, height} = Dimensions.get('window');

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
        <View style={styles.container}>
            <View style={{...styles.purpleBox, width: width * 0.9 }}></View>
        </View>
        <Text>w: {width}, h: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        height: 300,
        width: 300,
        backgroundColor: 'red',
    },
    purpleBox: {
        height: '50%',
        backgroundColor: 'purple',
        width: '50%',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    }
})