import { Text, TouchableOpacity, View } from "react-native";
import Etapa from "./const";
import { NavigationProp } from "@react-navigation/native";
import Quiz from "../../components/Quiz";
import styles from '../../components/Quiz/styles';
import { useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";
import { grade } from "../App";
import { Dialog } from "react-native-elements";
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
    
    const calculaNota = (notas: Array<number | null>) => {
      return notas.reduce((acc, val) => (acc ?? 0) + (val ?? 0), 0);
    }

    const finishQuiz = () => {
      
      navigation.navigate("confirmData");
      calculaNota(grade)
      setShowComponent(false);
      dispatch({
        type: "user/notas",
        nota: calculaNota(grade),
        quiz: [
          {
              step_number: 1,
              degree: grade[0]
          },
          {
              step_number: 1.1,
              degree: grade[1]
          },
          {
              step_number: 1.2,
              degree: grade[2]
          },
          {
              step_number: 2,
              degree: grade[3]
          },
          {
              step_number: 3,
              degree: grade[4]
          },
          {
              step_number: 4,
              degree: grade[5]
          },
          {
              step_number: 5,
              degree: grade[6]
          },
          {
              step_number: 5.1,
              degree: grade[7]
          },
          {
              step_number: 6,
              degree: grade[8]
          },
          {
              step_number: 6.1,
              degree: grade[9]
          },
          {
              step_number: 7,
              degree: grade[10]
          },
          {
              step_number: 8,
              degree: grade[11]
          },
          {
              step_number: 9,
              degree: grade[12]
          },
          {
              step_number: 10,
              degree: grade[13]
          },
          {
              step_number: 11,
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
        <Dialog isVisible={visible} onBackdropPress={toggleDialog} overlayStyle={{ backgroundColor: '#249E9F', alignItems: 'center', height: 185, width: 300, justifyContent: 'center' }}>
              <Dialog.Title titleStyle={{color: '#fff', fontFamily: 'Roboto-Bold', textAlign: 'center', fontSize: 24}} title="Atenção!!"/>
              <Text style={{color: '#fff', fontFamily: 'Roboto-Light'}}>Ainda há questões em branco!</Text>
        </Dialog>
      </>
    )
  }
})
