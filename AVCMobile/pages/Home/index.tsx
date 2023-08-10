import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Etapa from '../Quiz/const';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const firstQuiz = () => {
        setTimeout(() => navigation.navigate(
            'quiz', {
            screen: `${Etapa[0].description}`
        }
        ), 300)
    }
    return (
        <LinearGradient style={styles.container} colors={['#24464F', '#1AAEA2']} >
            <View style={styles.container}>

                <View style={styles.containerLogo}>
                    <Image style={styles.logo} source={require('../../assets/public/BuddyVisionLogo.png')} />
                </View>
                <View>

                    <TouchableOpacity onPress={firstQuiz} style={styles.button}>
                        <Text >INICIAR ATENDIMENTO</Text>
                        <Icon name='long-arrow-right' size={25} color={'#ffffff7d'}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={firstQuiz} style={styles.button}>
                        <Text >CHECAR ATENDIMENTOS</Text>
                        <Icon name='search' size={25} color={'#ffffff7d'}></Icon>
                    </TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    )
}

export default Home;