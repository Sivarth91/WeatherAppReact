import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {DateTime} from "./src/components/DateTime";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World !</Text>
      <StatusBar style="auto" />
      <DateTime></DateTime>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
