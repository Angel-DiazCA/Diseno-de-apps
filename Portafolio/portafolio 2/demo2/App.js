import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Products from './components/Products';


export default function App() {
return (
  <View style={styles.container}>
    <Products/>
    <StatusBar style="auto"/>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});