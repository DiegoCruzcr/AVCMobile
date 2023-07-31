import React from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import ButtonGroup from "../ButtonGroup";
import NextButton from "../NextButton";
// import { useNavigation } from "@react-navigation/native";

const Quiz = ({description, hint}) => {
    // const navigation = useNavigation();

    const handleButtonPress = () => {
        // Lógica para avançar para a próxima tela
        console.log('Avançar para próxima tela...');
        // navigation.navigate('Home');
      };

    return (
        <View style={styles.container}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.hint_text}>{hint}</Text>
        <ButtonGroup />
        <NextButton />
      </View>
    );
    }

export default Quiz;