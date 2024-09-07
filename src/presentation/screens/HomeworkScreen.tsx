import { StyleSheet, View } from "react-native"

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.purpleBox]} />
        <View style={[styles.box, styles.orangeBox]} />
        <View style={[styles.box, styles.blueBox]} />
    </View>
  )
}

//Solution 1
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purpleBox: {
//         flex: 1,
//         backgroundColor: '#5856D6',
//     },
//     orangeBox: {
//         flex: 7,
//         backgroundColor: '#f0a23b',
//     },
//     blueBox: {
//         flex: 1,
//         backgroundColor: '#28c4d9',
//     },
// })

// Solution 1 professor
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purpleBox: {
//         backgroundColor: '#5856D6',
//     },
//     orangeBox: {
//         flex: 1,
//         backgroundColor: '#f0a23b',
//     },
//     blueBox: {
//         backgroundColor: '#28c4d9',
//     },
// })


//Solution 2
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'stretch',
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purpleBox: {
//         backgroundColor: '#5856D6',
//     },
//     orangeBox: {
//         backgroundColor: '#f0a23b',
//     },
//     blueBox: {
//         width: '100%',
//         backgroundColor: '#28c4d9',
//     },
// })

//Solution 3
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purpleBox: {
//         alignSelf: 'flex-end',
//         backgroundColor: '#5856D6',
//     },
//     orangeBox: {
//         alignSelf: 'flex-start',
//         backgroundColor: '#f0a23b',
//     },
//     blueBox: {
//         backgroundColor: '#28c4d9',
//     },
// })

//Solution 4
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start',
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purpleBox: {
//         alignSelf: 'flex-end',
//         backgroundColor: '#5856D6',
//     },
//     orangeBox: {
//         alignSelf: 'center',
//         backgroundColor: '#f0a23b',
//     },
//     blueBox: {
//         backgroundColor: '#28c4d9',
//     },
// })

//Solution 5
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     box: {
//         // flex: 1,
//         width: 100,
//         // height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         // gap: 20,
//     },
//     purpleBox: {
//         backgroundColor: '#5856D6',
//     },
//     orangeBox: {
//         backgroundColor: '#f0a23b',
//     },
//     blueBox: {
//         backgroundColor: '#28c4d9',
//     },
// })

//Solution 6
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//         flexDirection: 'column',
//         // justifyContent: 'space-between',
//     },
//     box: {
//         // flex: 1,
//         // width: 100,
//         // height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         // gap: 20,
//     },
//     purpleBox: {
//         flex: 2,
//         backgroundColor: '#5856D6',
//     },
//     orangeBox: {
//         flex: 2,
//         backgroundColor: '#f0a23b',
//     },
//     blueBox: {
//         flex: 4,
//         backgroundColor: '#28c4d9',
//     },
// })

//Solution 7
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     box: {
//         // flex: 1,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         // gap: 20,
//     },
//     purpleBox: {
//         backgroundColor: '#5856D6',
//     },
//     orangeBox: {
//         backgroundColor: '#f0a23b',
//     },
//     blueBox: {
//         backgroundColor: '#28c4d9',
//     },
// })

//Solution 8
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     box: {
//         // flex: 1,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         // gap: 20,
//     },
//     purpleBox: {
//         backgroundColor: '#5856D6',
//     },
//     orangeBox: {
//         left: 100,
//         backgroundColor: '#f0a23b',
//     },
//     blueBox: {
//         backgroundColor: '#28c4d9',
//     },
// })

//Solution 9
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425b',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     box: {
//         // flex: 1,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         // gap: 20,
//     },
//     purpleBox: {
//         backgroundColor: '#5856D6',
//         top: 100,
//     },
//     orangeBox: {
//         backgroundColor: '#f0a23b',
//         left: 100,
//     },
//     blueBox: {
//         backgroundColor: '#28c4d9',
//     },
// })

//Solution 10
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        // flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        // gap: 20,
    },
    purpleBox: {
        backgroundColor: '#5856D6',
    },
    orangeBox: {
        backgroundColor: '#f0a23b',
        top: 50
    },
    blueBox: {
        backgroundColor: '#28c4d9',
    },
})