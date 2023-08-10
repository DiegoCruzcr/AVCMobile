import { Text, TouchableOpacity } from "react-native";
import Etapa from "./const";
import { NavigationProp } from "@react-navigation/native";
import Quiz from "../../components/Quiz";
import styles from '../../components/Quiz/styles';

export const Etapas = Etapa.map((etapa, index) => {
  return ({ navigation }: { navigation: NavigationProp<any> }) => {
    const nextPage = () => {
      navigation.navigate(`${Etapa[index + 1].description}`);
    }
    return (
      <>
        <Quiz hint={etapa.hint} questions={etapa.questions} hasNT={etapa.hasNT} />
        <TouchableOpacity onPress={nextPage} style={styles.button_next}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </>
    )
  }
})
