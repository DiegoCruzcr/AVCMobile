import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';

const ConfirmDialog = ({yesButton, noButton, visible, question}) => {
    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
        <View style={styles.modalContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>{question}</Text>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.button} onPress={yesButton}>
                        <Text style={styles.buttonText}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={noButton}>
                        <Text style={styles.buttonText}>Não</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </Modal>
    )
}

export default ConfirmDialog;