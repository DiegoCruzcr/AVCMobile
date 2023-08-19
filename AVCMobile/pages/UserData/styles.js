import {
    StyleSheet,
} from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#24464F' 
    },
    inputContainer: {
        margin: 20,
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
    }
})

export default styles;