import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#24464F'
    },
    next_button: {
      backgroundColor: '#249E96',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      marginHorizontal: 5,
    },
    description: {
      fontFamily: 'Inter',
      textAlign: 'left',
      fontSize: 24,
      color: '#fff',
      marginTop: 50,
      fontWeight: 'bold'
    },
    hint_text: {
      fontFamily: 'Inter',
      fontSize: 16,
      color: '#fff',
      marginBottom: 50,
      marginTop: 50
    },
    buttonRow: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    button: {
      flex: 1,
      backgroundColor: '#007BFF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      marginHorizontal: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    nextButton: {
      backgroundColor: '#249E96',
      left: 100,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: 20,
    },
    nextButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default styles;