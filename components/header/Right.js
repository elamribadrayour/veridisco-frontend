import {
    Image,
    Alert,
    TouchableOpacity,
} from "react-native";
import { View } from "react-native";

import styles from "../../styles/header/Right";

export default function Right() {

    let image_paths = [
        '../../assets/header/likes.png',
        '../../assets/header/messaging.png',
        '../../assets/header/filter.png',
    ]

    return (
        <View style={styles.right}>
            <TouchableOpacity>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../../assets/header/likes.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={{ width: 25, height: 25, marginLeft: 20 }}
                    source={require('../../assets/header/messaging.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={{ width: 25, height: 25, marginLeft: 20 }}
                    source={require('../../assets/header/filter.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
