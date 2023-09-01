import { Text, TouchableOpacity, View } from "react-native";
import Etapa from "./const";
import { NavigationProp } from "@react-navigation/native";
import Quiz from "../../components/Quiz";
import styles from '../../components/Quiz/styles';
import { useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";
import { grade } from "../App";
import { Dialog } from "react-native-elements";
// import { Pacientes } from "../UserData/types";
import { gradeTotal } from "../ConfirmData/calculaNota";
import { useDispatch } from "react-redux";


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
    const dispatch = useDispatch();

    const finishQuiz = () => {
      navigation.navigate("confirmData");
      setShowComponent(false);
      dispatch({
        type: "user/notas",
        nota: gradeTotal,
        quiz: [
          {
              stepNumber: 1,
              degree: grade[0]
          },
          {
              stepNumber: 1.1,
              degree: grade[1]
          },
          {
              stepNumber: 1.2,
              degree: grade[2]
          },
          {
              stepNumber: 2,
              degree: grade[3]
          },
          {
              stepNumber: 3,
              degree: grade[4]
          },
          {
              stepNumber: 4,
              degree: grade[5]
          },
          {
              stepNumber: 5,
              degree: grade[6]
          },
          {
              stepNumber: 5.1,
              degree: grade[7]
          },
          {
              stepNumber: 6,
              degree: grade[8]
          },
          {
              stepNumber: 6.1,
              degree: grade[9]
          },
          {
              stepNumber: 7,
              degree: grade[10]
          },
          {
              stepNumber: 8,
              degree: grade[11]
          },
          {
              stepNumber: 9,
              degree: grade[12]
          },
          {
              stepNumber: 10,
              degree: grade[13]
          },
          {
              stepNumber: 11,
              degree: grade[14]
          }
      ],

      })
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
