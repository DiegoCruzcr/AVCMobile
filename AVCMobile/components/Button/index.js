import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

const Button = ({ text, onPress }) => {
    // const value = value;
    console.log('Button: ', text);
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};
export default Button;