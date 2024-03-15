import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PokeStar from './components/pokestar';

export default function App() {
  return (
    <View style={styles.container}>
      <PokeStar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
