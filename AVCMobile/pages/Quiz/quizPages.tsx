import { Text, TouchableOpacity } from "react-native";
import Etapa from "./const";
import { NavigationProp } from "@react-navigation/native";
import Quiz from "../../components/Quiz";
import styles from '../../components/Quiz/styles';

export const Etapa1 = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const nextPage = () => {
    navigation.navigate(`${Etapa[1].description}`);
  };
  return (
    <>
      <Quiz description={Etapa[0].description} hint={Etapa[0].hint} questions={Etapa[0].questions} />
      <TouchableOpacity onPress={nextPage} style={styles.button_next}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </>
  )
}


export const Etapa1_1 = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const nextPage = () => {
    navigation.navigate(`${Etapa[2].description}`);
  };
  return (
    <>
      <Quiz description={Etapa[1].description} hint={Etapa[1].hint} questions={Etapa[1].questions} />
      <TouchableOpacity onPress={nextPage} style={styles.button_next}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </>
  )
}

export const Etapa1_2 = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const nextPage = () => {
    navigation.navigate(`${Etapa[0].description}`);
  };
  return (
    <>
      <Quiz description={Etapa[2].description} hint={Etapa[2].hint} questions={Etapa[2].questions} />
      <TouchableOpacity onPress={nextPage} style={styles.button_next}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </>
  )
}