import { StyleSheet, Text, View } from "react-native"

interface HelloWorldScreenProps {
    name?: string
}

export const HelloWorldScreen = ({name = 'World'}: HelloWorldScreenProps) => {
  return (
    <View style={styles.container}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>Hello, {name}</Text>
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
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
});