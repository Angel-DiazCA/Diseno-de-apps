import { StyleSheet, Text, View } from "react-native";

export default function StackScreen({}) {
    return (
    <View>
        <Text style={styles.text}>Stack Screen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    text: {
    fontSize: 30,
    alignContent: "center",
    },
});