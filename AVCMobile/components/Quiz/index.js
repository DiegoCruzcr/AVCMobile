import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import ButtonGroup from "../ButtonGroup";


const Quiz = ({hint, questions, hasNT}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.hint_text}>{hint}</Text>
            <ButtonGroup questions={questions} hasNT={hasNT}/>
        </View>
    );
}

export default Quiz;