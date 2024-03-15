import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View, } from "react-native";

const url = "https://swapi.dev/api/people";

export default function PokeStar() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then(
            (result) => {
            setData(result.results);
            setIsLoading(false);
            },
            (error) => {
            setError(error);
            setIsLoading(false);
            }
        );
    }, []);

    console.log(data);
    console.log(error);

    const getContent = () => {
        if (isLoading) {
        return (
            <View>
            <Text style={styles.textProps}>Loading Data...</Text>
            <ActivityIndicator size='large' color='gold' />
            </View>
        );
        }
        if (error) {
        return <Text style={styles.textProps}>Error: {error}</Text>;
        }
        return (
        <View>
            <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                <Text>Name: {item.name}</Text>
                <Text>Height: {item.height}</Text>
                <Text>Mass: {item.mass}</Text>
                <Text>Created: {item.created}</Text>
                <Text>Films: {item.films}</Text>
                </View>
            )}
            />
        </View>
        );
    };

    return <View>{getContent()}</View>;
    }

const styles = StyleSheet.create({
    textProps: {
        fontSize: 20,
        color: "#000",
    },
    cardContainer: {
        backgroundColor: "pink",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop:20,
    },
    image: {

    },
    errorStyle: {

    },
});