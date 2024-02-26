import { Image, StyleSheet } from "react-native";

export default function ImageViewer({placeHolderImageSource, selectedImage}){
    const imageSource = selectedImage ? {uri: selectedImage} : placeHolderImageSource;
    return(
        <Image source={imageSource}/>
    );
}

const Styles = StyleSheet.create({
    image: {
        width: 320,
        heigth: 440,
        borderRadius: 18,
    },
});

