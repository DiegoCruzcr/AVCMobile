import { NavigationProp } from "@react-navigation/native";
import { View } from "react-native";
import styles from "./styles";
import { Pacientes } from "../UserData/data";
import PacientCard from "../../components/PacientCard";

export const CheckUsers = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
        <>
            <View style={styles.container}>
                {Pacientes.map((paciente, index) => 
                    <PacientCard key={index} paciente={paciente} />
                )}
            </View>
        </>
    )
}

export default CheckUsers;