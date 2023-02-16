import { View } from "react-native";

import Logo from './Logo';
import styles from "../../styles/header/Left";


export default function Left() {
    return (
        <View style={styles.left}>
            <Logo/>
        </View>
    );
}
