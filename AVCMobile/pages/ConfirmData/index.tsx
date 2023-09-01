import React, { useEffect, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, Text, View, Image, Modal, Alert  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Etapa from '../Quiz/const';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfirmDialog from '../../components/ConfirmDialog';
import { grade } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import rootReducer from '../../redux/root-reducer';
import userReducer from '../../redux/user/reducer';
import { PacienteData } from '../../redux/user/types';
import axios from 'axios';


export const ConfirmData = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const { nome, cpf, dataNascimento, sexo, comentario, nota, idPaciente, quiz } = useSelector((state: PacienteData) => state.userReducer)

    const postData = {
        patient_id: idPaciente,
        quiz: quiz,
        ai_analysis: '98% avc',
        nihss_score: nota,
        check_in: dataNascimento,
        historic: comentario
    } 

    async function postApi() {
        try {
            const response = await axios.post('https://f1gl44wn74.execute-api.us-east-1.amazonaws.com/Prod/report', postData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const finalizaAtendimento = () => {
        // deixar objeto em branco dps coloco
        postApi();
        navigation.navigate('home')
    }
    
    return (
        <LinearGradient style={styles.container} colors={['#24464F', '#1AAEA2']} >
            <View style={styles.container}>
                <View>
                    <Text>nome: {nome}</Text>
                    <Text>cpf: {cpf}</Text>
                    <Text>data: {dataNascimento}</Text>
                    <Text>sexo: {sexo === 1 ? 'Masculino' : sexo === 2 ? 'Mulher' : ''}</Text>
                    <Text>comentario: {comentario}</Text>
                    <Text>nota: {nota}</Text>
                    <Text>id: {idPaciente}</Text>
                    {quiz.map((etapa: any) => 
                    <View>
                        <Text>etapa: {etapa.stepNumber}</Text>
                        <Text>nota: {etapa.degree}</Text>
                    </View>
                    )}
                </View>
                <View>
                    <TouchableOpacity onPress={finalizaAtendimento}>
                        <Text>FINALIZAR ATENDIMENTO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

export default ConfirmData;