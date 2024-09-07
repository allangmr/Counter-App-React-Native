import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
import { PositionScreen } from './src/presentation/screens/PositionScreen';

export const App = () => {
  return (
    <PaperProvider
    settings={{
      icon: (props) => <IonIcon {...props} />,
    }}>
      <SafeAreaView style={styles.container}>
        {/* <HelloWorldScreen name='Allan Montilla' /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
      </SafeAreaView>
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});