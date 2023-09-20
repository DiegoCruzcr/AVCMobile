import {
    StyleSheet,
} from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#24464F',
    },
    inputContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
        
    },
    input: {
        backgroundColor: 'rgba(176,176,176, .65)', 
        borderColor: '#fff',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        fontFamily: 'Roboto-light',
    },
    inputData: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: 'rgba(176,176,176, .65)', 
        borderColor: '#fff',
        borderWidth: .5,
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
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
      },
      titleText : {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
      },
      required: {
        color: 'red',
        fontSize: 11,
        fontFamily: 'Roboto-Light',
      },
      textWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Alinhar ao topo
      }
})

export default styles;