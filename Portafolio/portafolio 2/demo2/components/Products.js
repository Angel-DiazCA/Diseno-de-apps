import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";

const url ="https://fakestoreapi.com/products"

export default function Products(){
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
                showsVerticalScrollIndicator={true}
                data={data}
                renderItem= {({item}) =>(
                    <View>
                        <Image source={{uri: item.image}} style={styles.image}/>
                        <Text style={styles.text}>Name: {item.title}</Text>
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
