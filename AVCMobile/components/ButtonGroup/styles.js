import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
    button: {
        flex: 1,
        backgroundColor: '#007BFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginHorizontal: 5,
        justifyContent: 'center'
          },
    buttonText: {
        color: '#fff',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonRow: {
        flexDirection: 'column',
        marginBottom: 10,
      },
    buttonSum: {
      textAlign: 'right',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    selectedValue: {
      color: 'white',
      fontWeight: 'bold'
    }
});
export default styles;
