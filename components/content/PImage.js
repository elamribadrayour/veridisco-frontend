import {
    Image,
    View,
} from "react-native";

import styles from "../../styles/content/PImage";

export default function PImage({path}) {

    console.log(path)

    return (
        <View style= {styles.pimage}>
            <Image 
                style={{flex:1 , width: 400, height: 500}}
                source={{uri: path}}
            />
        </View>
    );
}
