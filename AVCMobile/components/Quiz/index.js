import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import ButtonGroup from "../ButtonGroup";


const Quiz = ({description, hint, questions}) => {
    
    

    return (
        <View style={styles.container}>
        <Text style={styles.hint_text}>{hint}</Text>
        <ButtonGroup questions={questions} />
        
        </View>
    );
    }

export default Quiz;