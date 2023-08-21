import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    color: {
        color: '#000'
    },
    card: {
        backgroundColor: '#249E96',
        padding: 20,
        marginHorizontal: 30,
        marginVertical: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    nome: {
        color:"white",
        fontSize: 16,
        fontWeight: "bold"
    },
    data: {
        color:"white",
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: 'rgba(255,255,255,0.4)',
        padding: 10,
        borderRadius: 10
    }
  });

export default styles;