import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function HomeScreen({}) {
    const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity style={styles.buttonOp} onPress={() => navigation.navigate("StackScreen")}>
        <Text style={styles.textTouch}>Go to Stack Screen</Text>
      </TouchableOpacity>
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