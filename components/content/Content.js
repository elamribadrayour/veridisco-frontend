import { useState, useEffect } from "react";

import { View, ScrollView, TouchableWithoutFeedback } from "react-native";

import axios from 'axios';

import Post from "./Post";

import styles from "../../styles/content/Content";
import Logo from "../header/Logo";



export default function Content() {

    let backCount = 0
    let backTimer = null

    const [isLoading, setLoading] = useState(true);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [image_path, setImagePath] = useState(null);


    function getProduct() {
        return axios.post(
            'https://9ef3-37-171-229-71.eu.ngrok.io/product',
            {
                "language": "fr",
                "country": "FR",
                "user": "0",
            }
        )
        .then((response) => {
            setTitle(response.data.name);
            setDescription(response.data.description);
            setImagePath(response.data.image_url);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onPress = () => {
        backCount++
        if (backCount == 2) {
            clearTimeout(backTimer)
            getProduct()
        } else {
            backTimer = setTimeout(() => {
            backCount = 0
            }, 1000)
        }
    }

    useEffect(() => {
        getProduct()
      }, []);

    return (
        <TouchableWithoutFeedback
            style= {styles.pimage}
            onPress={onPress}
            >
            <View style={styles.content}>
            {isLoading ? 
                <Logo/>: 
                <Post
                    image_path={image_path}
                    title={title}
                    description={description}
                    />
            }
            </View>
        </TouchableWithoutFeedback>
    );
}
