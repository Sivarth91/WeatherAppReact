import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello World !</Text>
        <StatusBar style="auto" />
        <Home></Home>
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
  text: {
      fontSize: 36
  },
});
