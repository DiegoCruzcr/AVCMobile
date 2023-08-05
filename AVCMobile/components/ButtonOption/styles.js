import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      padding: 10,
      margin: 10,
      width: 370,
      height: 90,
      backgroundColor: '#249E96',
      borderRadius: 10,
      flexDirection: 'row'
    },
    numberContainer: {
      position: 'absolute',
      fontFamily: 'Inter',
      fontWeight: 'bold',
      textAlign: 'center',
      left: 15,
      backgroundColor: 'transparent',
      flex: 1,
    },
    numberText: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 40,
    },
  });

export default styles;