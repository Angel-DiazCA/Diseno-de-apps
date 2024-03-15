import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

const url ="https://jsonplaceholder.typicode.com/todos"

export default function StackScreen2({}){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result =>{
                setIsLoading(false);
                setData(result);
            }, error =>{
                setIsLoading(false);
                setError(error);
            })
    }, []);

    const getContent = () => {
        if(isLoading){
            return(
                <View>
                    <Text style={styles.textSize}>Loading data...</Text>
                    <ActivityIndicator color="red" size="large"/>
                </View>
            );
        }
        if(error){
            return <Text style={styles.textSize}>Error: {error}</Text>
    }
    return(
        <View style={styles.flatlistContainer}>
            <FlatList
                data={data}
                renderItem= {({item}) =>(
                    <View>
                        <Text style={styles.text}>Title: {item.title}</Text>
                        <Text style={styles.text}>ID: {item.id}</Text>
                    </View>
    )}
            />
            </View>
            
        
    )}
    
    return(
        <View>
            {getContent()}
        </View>
    );

}
const styles = StyleSheet.create({
    textSize: {
        fontSize: 20,
    },
    image: {
        width: 80,
        height:80,
    },
    flatlistContainer:{
        justifyContent: "center",
        alignItems:"center" ,
        flex: 1,
    }
})