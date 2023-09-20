import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, Text, View, Image, Modal  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { resetPaciente } from '../../redux/user/actions';
import { useDispatch } from 'react-redux';
import { grade } from '../App';


export const FinishPage = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const dispatch = useDispatch();

    const returnHome = () => {
        navigation.navigate('home')
        dispatch(resetPaciente())
        for (let i = 0; i < grade.length; i++) {
            grade[i] = null;
        }
    }
    return (
        <LinearGradient style={styles.container} colors={['#24464F', '#1AAEA2']} >
            <View style={styles.container}>

                <View style={styles.containerLogo}>       
                            <Image style={styles.logo} source={require('../../assets/public/BuddyVisionLogo.png')} />
                </View>


                <View style={styles.containerText}>
                    <Text style={styles.text}>
                        Respostas Enviadas!
                    </Text>
                </View>
                
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={returnHome}>
                        <Text>RETORNAR AO MENU</Text>
                        <Icon name='home' size={25} color={'#ffffff7d'}></Icon>
                    </TouchableOpacity>
                </View>
    

            </View>
        </LinearGradient>
    )
}

export default FinishPage;