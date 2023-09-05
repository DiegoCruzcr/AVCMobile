import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    drawerContainer: {
        backgroundColor: '#24464F', 
    },
    drawerTitleContainer: {
        justifyContent: 'center', 
        alignItems: 'left', 
        paddingHorizontal: 15, 
        
    },
    drawerTitle: {
        fontSize: 32,
        fontFamily: 'Roboto-Bold',
        color: '#fff',
        fontWeight: 'bold',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        marginBottom: 30,
        paddingBottom: 15,
        paddingTop: 20,
    },
    icon: {
        paddingVertical: 15, 
        paddingHorizontal: 8
    }
})

export default styles;