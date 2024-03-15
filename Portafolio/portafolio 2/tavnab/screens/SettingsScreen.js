import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen({}) {
  return (
    <View>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignContent: "center",
  },
});