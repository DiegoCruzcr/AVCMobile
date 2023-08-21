import React, { useEffect, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, Text, View, Image, Modal  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Etapa from '../Quiz/const';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfirmDialog from '../../components/ConfirmDialog';
import { grade } from '../App';
import { CalculaNota } from './calculaNota';

export const ConfirmData = ({ navigation }: { navigation: NavigationProp<any> }) => {
    
    return (
        <LinearGradient style={styles.container} colors={['#24464F', '#1AAEA2']} >
            <View style={styles.container}>

               <CalculaNota></CalculaNota>

            </View>
        </LinearGradient>
    )
}

export default ConfirmData;