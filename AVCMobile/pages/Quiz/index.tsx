import { Text, TouchableOpacity, View } from "react-native";
import Etapa from "./const";
import { NavigationProp } from "@react-navigation/native";
import Quiz from "../../components/Quiz";
import styles from '../../components/Quiz/styles';
import { useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";
import { grade } from "../App";
import { Dialog } from "react-native-elements";
import { Pacientes } from "../UserData/data";
import { gradeTotal } from "../ConfirmData/calculaNota";


export const Etapas = Etapa.map((etapa, index) => {
  return ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [showComponent, setShowComponent] = useState(false);
    const [visible, setVisible] = useState(false)

    const toggleDialog = () => {
      setVisible(!visible);
    }
    const quizDialog = () => {
      setShowComponent(true);
  }

    const declineDialog = () => {
        setShowComponent(false);
    }

    const finishQuiz = () => {
      navigation.navigate("confirmData");
      setShowComponent(false);
      const lastPacient = Pacientes.length - 1;
      Pacientes[lastPacient].nota = gradeTotal;
    }

    const nextPage = () => {
      if (Etapa[index + 1] == null) {
        const hasNull = grade.some(grade => grade === null);
        if (hasNull) {
          toggleDialog();
        }
        else {
          
          quizDialog();
        }
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
        <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
              <Dialog.Title titleStyle={{color: '#000'}} title="Atenção!!"/>
              <Text style={{color: '#000'}}>Ainda há questões em branco!</Text>
        </Dialog>
      </>
    )
  }
})
