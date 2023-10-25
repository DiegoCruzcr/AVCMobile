import React, { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { attErrorInfo } from '../../redux/errorInfo/actions';


export const ConfirmData = ({ navigation }: { navigation: NavigationProp<any> }) => {

    
    const [infoError, setInfoError] = useState({code: 404, description: 'Ocorreu um erro inesperado.'})
    const { nome, sexo, nota, quiz, idPaciente, checkBox } = useSelector((state: any) => state.user)

    const postData = {
        patient_id: idPaciente,
        quiz: quiz,
        check_box: checkBox,
        nihss_score: nota,
        reason: 'AVC'
    } 

    const dispatch = useDispatch();

    const setErrorInfo = (statusCode : number) => {
        switch (statusCode) {
            case 400:
              setInfoError({code: 400, description: 'Requisição inválida.'});
              break;
            case 401:
              setInfoError({code: 401, description: 'Não autorizado. Faça login.'});
              break;
            case 403:
              setInfoError({code: 403, description: 'Acesso proibido.'});
              break;
            case 404:
              setInfoError({code: 404, description: 'Recurso não encontrado.'});
              break;
            default:
              setInfoError({code: 500, description: 'Ocorreu um erro inesperado.'});
              break;
          }
          dispatch(attErrorInfo(infoError.code, infoError.description))
    }

    async function postApi() {
        try {
            const response = await axios.post('https://f1gl44wn74.execute-api.us-east-1.amazonaws.com/Prod/report', postData);
            console.log(response);
        } catch(error: any) {
            if (error.response) {
                const statusCode = error.response.status;
                console.log(statusCode);
                console.log(error.response.data);
                console.log(postData);
                
                
                setErrorInfo(statusCode)
                setTimeout(() => navigation.navigate('errorPage'), 500)
            }
        }
    }

    const finalizaAtendimento = () => {
        console.log(quiz);
        
        navigation.navigate('loadPage')
        postApi().then(() => {
            navigation.navigate('finishPage')
        });
    }
    
    return (
        <LinearGradient style={styles.container} colors={['#24464F', '#1AAEA2']} >
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image style={[styles.logo ]} source={require('../../assets/public/BuddyVisionLogo.png')} />
                    <Text></Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Paciente: {nome}</Text>
                    <Text style={styles.text}>Sexo: {sexo === 1 ? 'Masculino' : sexo === 2 ? 'Feminino' : ''}</Text>
                    <Text style={styles.text}>Score NIHSS: {nota}</Text>
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={finalizaAtendimento}>
                        <Text>FINALIZAR ATENDIMENTO</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </LinearGradient>
    )
}

export default ConfirmData;

