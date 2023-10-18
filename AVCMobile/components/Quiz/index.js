import React from "react";
import styles from "./styles";
import { View, Text, ScrollView } from "react-native";
import ButtonGroup from "../ButtonGroup";


const Quiz = ({gradeIndex, hint, questions, hasNT}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.hint_text}>{hint}</Text>
                <ButtonGroup gradeIndex={gradeIndex} questions={questions} hasNT={hasNT}/>
            </ScrollView>
        </View>
        
    );
}

export default Quiz;