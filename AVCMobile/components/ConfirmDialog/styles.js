import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.6)'
    },
    container: {
        position: "absolute",
        width: 300,
        height: 185,
        backgroundColor: '#1AAEA2',
        justifyContent: "center",
        alignItems: 'center',
        elevation: 5
    },
    title: {
        fontSize: 24,
        fontFamily: 'Roboto-Medium',
        color: '#fff',
        textAlign: "center",
        marginBottom: 30
    },
    containerButtons: {
        flexDirection: 'row',
    },
    button: {
        marginHorizontal: 20,
        backgroundColor: '#237D7B',
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Roboto-Medium',
        color: '#fff',
    },
})

export default styles;