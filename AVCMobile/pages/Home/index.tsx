import React, { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { TouchableOpacity, Text, View, Image, Modal  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Etapa from '../Quiz/const';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfirmDialog from '../../components/ConfirmDialog';

export const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [showComponent, setShowComponent] = useState(false);


    const firstQuiz = () => {
        setTimeout(() => {
            navigation.navigate(
            'quiz', {
            screen: `${Etapa[0].description}`
        });
        setShowComponent(false);
    }, 300)
    }

    const quizDialog = () => {
        setShowComponent(true);
    }

    const declineDialog = () => {
        setShowComponent(false);
    }

    return (
        <LinearGradient style={styles.container} colors={['#24464F', '#1AAEA2']} >
            <View style={styles.container}>

                <View style={styles.containerLogo}>
                    <Image style={{width: 281, height:169 }} source={require('../../assets/public/BuddyVisionLogo.png')} />
                </View>
                
                {showComponent && (
                    
                    <ConfirmDialog visible={showComponent} yesButton={firstQuiz} noButton={declineDialog}/>
                     
                )}
                <View>
                    
                    <TouchableOpacity onPress={quizDialog} style={styles.button}>
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