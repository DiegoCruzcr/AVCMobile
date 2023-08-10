import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      paddingVertical: 10,
      margin: 10,
      width: 370,
      height: 90,
      backgroundColor: '#249E96',
      borderRadius: 10,
      flexDirection: 'row'
    },
    buttonContainerSixRows: {
      alignItems: 'center',
      paddingVertical: 5,
      margin: 10,
      width: 370,
      height: 65,
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
      color: 'white',
      fontWeight: 'bold',
      
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      paddingRight: 15,
    },
   
  });

export default styles;