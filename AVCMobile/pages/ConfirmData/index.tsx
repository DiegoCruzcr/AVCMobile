import React, { useEffect, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, Text, View, Image, Modal  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Etapa from '../Quiz/const';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfirmDialog from '../../components/ConfirmDialog';
import { grade } from '../App';

export const ConfirmData = ({ navigation }: { navigation: NavigationProp<any> }) => {

    

    const ComponentNull = () => {
        const hasNull = grade.some(grade => grade === null);
        if (hasNull) {
            return (
                <Text>Ainda há perguntas a serem respondidas</Text>
            )
        }
        else {
            const gradeTotal = grade.reduce((acc, val) => (acc ?? 0) + (val ?? 0), 0)
            return(
                <Text>{gradeTotal}</Text>
            )
        }
        
    }
    
    return (
        <LinearGradient style={styles.container} colors={['#24464F', '#1AAEA2']} >
            <View style={styles.container}>

               <ComponentNull></ComponentNull>

            </View>
        </LinearGradient>
    )
}

export default ConfirmData;