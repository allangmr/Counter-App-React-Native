import { useState } from "react";
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles";
import { FAB } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
    const [counter, setCounter] = useState(10)
  return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>{counter}</Text>
        {/* <Icon name="accessibility-outline" size={30} color="#5856D6" /> */}
        <FAB style={globalStyles.fab}
            onPress={() => setCounter(counter + 1)}
            onLongPress={() => setCounter(0) }
            label=""
            icon="add"
            // icon = {() => <Icon name="add" size={20} color="#5856D6" />}
        />
    </View>
  )
}
