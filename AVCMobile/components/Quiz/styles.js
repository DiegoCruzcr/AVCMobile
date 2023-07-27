import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    description: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
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
      backgroundColor: '#28a745',
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