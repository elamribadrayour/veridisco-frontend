import { View, ScrollView } from "react-native";

import PImage from "./PImage";
import Title from "./Title";
import Description from "./Description";


import styles from '../../styles/content/Post'


export default function Post({image_path, title, description}) {
    return (
        <ScrollView style={{width: "100%"}}>
            <View style={styles.post}>
                <PImage path={image_path}/>
                <Title text={title}/>
                <Description text={description}/>
            </View>
        </ScrollView>
    );
}
