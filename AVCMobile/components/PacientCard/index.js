import { View, Text, TouchableOpacity } from "react-native";
import {
    Button,
    Dialog,
    CheckBox,
    ListItem,
    Avatar,
    } from 'react-native-elements';

import { useState } from "react";
import { DialogTitle } from "@rneui/base/dist/Dialog/Dialog.Title";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';





const PacientCard = ({paciente}) => {
    const [isVisible, setVisible] = useState(false);

    const toggleDialog = () => {
        setVisible(!isVisible);
    }
    return (
        <>
        <View>
            <TouchableOpacity 
            style={styles.card}
            onPress={toggleDialog}>
                <Text style={styles.nome}>{paciente.nome}</Text>
                <Text style={styles.data}>{paciente.nota || '??'}</Text>
            </TouchableOpacity>
            
        </View>
            <Dialog isVisible={isVisible} onBackdropPress={toggleDialog} style={{backgroundColor: 'blue'}}>
                <DialogTitle titleStyle={styles.color} title={paciente.nome}/>
                <View>
                    <Text style={styles.color}>Nome: {paciente.nome}</Text>
                    <Text style={styles.color}>Data de Nascimento: {paciente.dataNascimento}</Text>
                    <Text style={styles.color}>Sexo: {paciente.sexo}</Text>
                    <Text style={styles.color}>Comentário: {paciente.comentario || 'Sem comentários...'}</Text>
                    <Text style={styles.color}>Nota: {paciente.nota || 'Nota não cadastrada'}</Text>
                    <TouchableOpacity>
                        <Icon name="download" size={25} color={'#000'} style={{paddingTop: 15}}/>
                    </TouchableOpacity>
                </View>
            </Dialog>
        </>
    )
}

export default PacientCard;