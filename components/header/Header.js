import { View } from "react-native";

import styles from "../../styles/header/Header";

import Left from './Left';
import Right from './Right';

export default function Header() {
    return (
        <View style={styles.header}>
            <Left/>
            <Right/>
        </View>
    );
}
