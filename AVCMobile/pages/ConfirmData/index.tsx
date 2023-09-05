import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { useSelector } from 'react-redux';
import { PacienteData } from '../../redux/user/types';
import axios from 'axios';


export const ConfirmData = ({ navigation }: { navigation: NavigationProp<any> }) => {

    

    const { nome, cpf, dataNascimento, sexo, comentario, nota, quiz } = useSelector((state: PacienteData) => state.userReducer)

    const postData = {
        patient_id: 'patient-a719d189-8025-4830-888e-b44cf2b5c82c',
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
                    <Text style={styles.text}>{nome}</Text>
                    <Text style={styles.text}>{cpf}</Text>
                    <Text style={styles.text}>{sexo === 1 ? 'Masculino' : sexo === 2 ? 'Mulher' : ''}</Text>
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