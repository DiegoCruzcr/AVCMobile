import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'

const UserData = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [selectedIndex, setIndex] = React.useState(0);

    const formatDate = (date: { toLocaleDateString: (arg0: string, arg1: { year: string; month: string; day: string; }) => any; }) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('pt-BR', options);
      };
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View>
                    <Text>Nome do Paciente</Text>
                    <TextInput style={styles.input} placeholder="Ex: Eduardo da Silva"></TextInput>
                </View>
            </View>
            <View style={styles.inputContainer}>
                
                    <Text>Data de Nascimento</Text>
                    <TouchableOpacity style={styles.inputData} onPress={() => setOpen(true)}>
                        <Text >{formatDate(date)}</Text>
                        <Icon  name="calendar" size={20}></Icon>
                    </TouchableOpacity>
                    <DatePicker 
                    modal open={open} 
                    mode="date" 
                    date={date} 
                    onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}/>
                
            </View>
            <View style={styles.inputContainer}>
                <Text>Sexo</Text> 
                <View style={{flexDirection: 'row'}}>
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Homem'
                    checked={selectedIndex === 0}
                    onPress={() => setIndex(0)}
                    checkedColor="#249E96"
                    />
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Mulher'
                    checked={selectedIndex === 1}
                    onPress={() => setIndex(1)}
                    checkedColor="#249E96"
                    />
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Outros'
                    checked={selectedIndex === 2}
                    onPress={() => setIndex(2)}
                    checkedColor="#249E96"
                    />
                </View>
            </View>
        </View>
    )
}

export default UserData;