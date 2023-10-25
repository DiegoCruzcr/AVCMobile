import React from 'react';
import { Text, View, Image, TouchableOpacity, BackHandler  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'


export const ErrorPage = ({ navigation }: { navigation: NavigationProp<any> }) => {
    

    useEffect(() => {
        const backAction = () => {
          navigation.navigate('home');
          return true;
        };
      
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
      
        return () => backHandler.remove();
      }, []);

    const { code, description } = useSelector((state: any) => state.error)

    const backHome = () => {
        navigation.navigate('home')
    }

    return (
        <LinearGradient style={styles.container} colors={['#24464F', '#1AAEA2']} >
            <View style={styles.container}>

                <View>
                    <View style={styles.containerLogo}>      
                        <Text style={styles.textCode}>
                            {code}      
                        </Text>    
                        <Image style={styles.logo} source={require('../../assets/public/errorLogo.png')} />
                    </View>

                    <View>
                                             
                        <Text style={styles.textError}>
                            {description}     
                        </Text>                        
                        <Text style={styles.textSorry}>
                        Sua busca por informações de saúde está temporariamente fora de serviço, mas nossa equipe está de plantão!
                        </Text>                        
                    </View>
                </View>
                

                <View>
                    <TouchableOpacity  style={[styles.button]} onPress={backHome}>
                            <Text>VOLTAR PARA INÍCIO</Text>
                            <Icon name='home' size={25} color={'#ffffff7d'}></Icon>
                    </TouchableOpacity>
                </View>
                
                
            </View>
        </LinearGradient>
    )
}

export default ErrorPage;