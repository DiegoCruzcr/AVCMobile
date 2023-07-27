import React from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import ButtonGroup from "../ButtonGroup";
// import { useNavigation } from "@react-navigation/native";

const Quiz = () => {
    // const navigation = useNavigation();

    const handleButtonPress = () => {
        // Lógica para avançar para a próxima tela
        console.log('Avançar para próxima tela...');
        // navigation.navigate('Home');
      };

    return (
        <View style={styles.container}>
        <Text style={styles.description}>1a Nivel de consciencia.</Text>
        <ButtonGroup />
        <TouchableOpacity style={styles.nextButton} onPress={() => handleButtonPress}>
          <Text style={styles.nextButtonText}>Next Screen</Text>
        </TouchableOpacity>
      </View>
    );
    }

export default Quiz;