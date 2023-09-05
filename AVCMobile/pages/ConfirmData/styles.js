import {
    StyleSheet,
  } from "react-native";


  const styles = StyleSheet.create({
    gradientContainer: {
      backgroundColor: '#24464F'
    },
    container: {
      flex: 1,
      justifyContent: 'space-around',
      padding: 20,
    },
    button: {
      margin: 15,
      width: 320,
      paddingHorizontal: 20,
      paddingVertical: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#24464F',
      borderRadius: 10,
    },
    containerLogo: {
      alignItems: 'center',
    },
    logo: {
      width: 281,
      height: 169
    },
    button: {
      margin: 15,
      width: 320,
      paddingHorizontal: 20,
      paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#24464F',
      borderRadius: 10,
    },
    text: {
      fontSize: 25,
      color: 'white',
      fontFamily: 'Roboto-Medium',
    },
    containerText: {
      alignItems: 'flex-start',
      paddingHorizontal: 20,
      fontFamily: 'Roboto-Medium',
    },
    containerButton: {
      alignItems: 'center'
    }
  })

  

  export default styles;