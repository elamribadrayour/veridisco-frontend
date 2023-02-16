import {Text} from "react-native";

import styles from "../../styles/content/Title";

export default function Title({text}) {

    return (
        <Text style= {styles.title}>
            {text}
        </Text>
    );
}
