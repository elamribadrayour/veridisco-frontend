import {Text} from "react-native";

import styles from "../../styles/content/Description";

export default function Description({text}) {
    return (
        <Text
            style= {styles.description}
        >
            {text}
        </Text>
    );
}
