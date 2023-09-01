import {
    StyleSheet,
} from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#24464F' 
    },
    inputContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
    inputContainerData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    input: {
        backgroundColor: '#249E96', 
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    inputData: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#249E96', 
        borderColor: '#000',
        borderWidth: 1,
        padding: 13,
        borderRadius: 10,
        marginTop: 10,
    },
    button_next: {
        backgroundColor: '#249E96',
        height: 40,
        justifyContent: "center",
        borderRadius: 2
      },
      nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})

export default styles;