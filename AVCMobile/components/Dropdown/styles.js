import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#24464F', 
    },
    dropdown: {
        width: '100%',
        borderBottomWidth: 1,
        padding: 10,
        borderColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropdownOpen: {
        width: '100%',
        padding: 10,
        borderColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
    },
    itemText: {
        color: '#fff',
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        
    },
    dropdownContent: {
        width: '100%',
        backgroundColor: '#24464F',
        padding: 15,
        borderColor: '#fff',
        gap: 25,
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    disabled: {
        opacity: 0.5,
    }
});

export default styles;