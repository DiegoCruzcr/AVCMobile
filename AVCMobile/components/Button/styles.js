import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#007BFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginHorizontal: 5,
        justifyContent: 'center'
          },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
export default styles;
