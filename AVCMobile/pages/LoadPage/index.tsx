import React from 'react';
import { Text, View, Image  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import * as Animatable from 'react-native-animatable'


export const LoadPage = () => {


    return (
        <LinearGradient style={styles.container} colors={['#24464F', '#1AAEA2']} >
            <View style={styles.container}>

                <View style={styles.containerLogo}>       
                <Animatable.View
                        animation="pulse"
                        iterationCount="infinite"
                        direction='alternate'
                        duration={1500}
                    >
                            <Image style={styles.logo} source={require('../../assets/public/BuddyVisionLogo.png')} />
                    </Animatable.View>
                </View>


                <View style={styles.containerText}>
                    <Text style={styles.text}>
                        Enviando Respostas
                        
                    </Text>
                    <Animatable.View
                        style={styles.containerText}
                        easing="linear"
                        iterationCount="infinite"
                        duration={3000} 
                        >
          
                            <Animatable.Text
                            animation="fadeIn"
                            iterationCount="infinite"
                            direction="alternate"
                            duration={1000} 
                            style={styles.dots}
                            >
                            .
                            </Animatable.Text>
                            <Animatable.Text
                            animation="fadeIn"
                            iterationCount="infinite"
                            direction="alternate"
                            duration={1000}
                            delay={500} 
                            style={styles.dots}
                            >
                            .
                            </Animatable.Text>
                            <Animatable.Text
                            animation="fadeIn"
                            iterationCount="infinite"
                            direction="alternate"
                            duration={1000}
                            delay={1000} 
                            style={styles.dots}
                            >
                            .
                            </Animatable.Text>
          
                        </Animatable.View>
                </View>
                
                
    

            </View>
        </LinearGradient>
    )
}

export default LoadPage;