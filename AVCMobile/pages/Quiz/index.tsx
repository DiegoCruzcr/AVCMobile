import { Text, TouchableOpacity, View } from "react-native";
import Etapa from "./const";
import { NavigationProp } from "@react-navigation/native";
import Quiz from "../../components/Quiz";
import styles from '../../components/Quiz/styles';
import { useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";


export const Etapas = Etapa.map((etapa, index) => {
  return ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [showComponent, setShowComponent] = useState(false);
    const quizDialog = () => {
      setShowComponent(true);
  }

    const declineDialog = () => {
        setShowComponent(false);
    }

    const finishQuiz = () => {
      navigation.navigate("confirmData");
      setShowComponent(false);
    }

    const nextPage = () => {
      if (Etapa[index + 1] == null) {
        quizDialog();
      }
      else {
        navigation.navigate(`${Etapa[index + 1].description}`);
      }
    }

    return (
      <>
        <Quiz gradeIndex={index} key={index} hint={etapa.hint} questions={etapa.questions} hasNT={etapa.hasNT} />
        <View>
          {showComponent && (
            <ConfirmDialog yesButton={finishQuiz} question={"Deseja finalizar o atendimento?"} visible={showComponent} noButton={declineDialog}/>
          )}
        </View>
        <TouchableOpacity onPress={nextPage} style={styles.button_next}>
          <Text style={styles.buttonText}>{Etapa[index + 1] ? "PRÓXIMO" : "FINALIZAR"}</Text>
        </TouchableOpacity>
      </>
    )
  }
})
