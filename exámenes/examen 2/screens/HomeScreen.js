import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from "react-native";


export default function HomeScreen({}) {
    const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>Bienvenido Usuario!</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.text}>En la barra de navegación que se encuentra en
      la parte de abajo encontrará la información que necesita saber</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignContent: "center",
  },
  textTouch: {
    fontSize: 16,
    color: "white",
    alignItems: "center",
  },
  buttonOp: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10
  },
});