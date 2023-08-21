import { grade } from "../App";
import { View, Text } from "react-native";

export const gradeTotal = grade.reduce((acc, val) => (acc ?? 0) + (val ?? 0), 0);
export const CalculaNota = () => {
    return(
        <Text>{gradeTotal}</Text>
    )
}