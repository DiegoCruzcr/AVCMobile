import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'
import Etapa from "../Quiz/const";
import { NavigationProp } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { attDadosPaciente } from "../../redux/user/actions";

const UserData = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [selectedSex, setSex] = useState(0);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [comment, setComment] = useState('');
    const [idPaciente, setIdPaciente] = useState(Math.floor(Math.random() * 1000));
   

    const formatDate = (date: { toLocaleDateString: (arg0: string, arg1: { year: string; month: string; day: string; }) => any; }) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('pt-BR', options);
      };


    const dispatch = useDispatch();
    
    const firstQuiz = () => {  

        dispatch(attDadosPaciente(nome, cpf, formatDate(date), selectedSex, comment, idPaciente))
        
        setTimeout(() => {
            navigation.navigate(
            'quiz', {
            screen: `${Etapa[0].description}`
        });
        
    }, 300);

        setOpen(false);
    }

    const formatCPF = (inputCPF: string) => {
        const numericCPF = inputCPF.replace(/\D/g, '');
    
        let formattedCPF = '';
        for (let i = 0; i < numericCPF.length; i++) {
          formattedCPF += numericCPF[i];
          if (i === 2 || i === 5) {
            formattedCPF += '.';
          } else if (i === 8) {
            formattedCPF += '-';
          }
        }
    
        formattedCPF = formattedCPF.slice(0, 14);
    
        return formattedCPF;
      };
    
      const handleCPFChange = (text: string) => {
        const formattedText = formatCPF(text);
        setCpf(formattedText);
      };

      
    
    return (
        <>
        <ScrollView style={styles.container}>
    
            <View style={styles.inputContainer}>
                <View>
                    <Text>Nome do Paciente</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="Ex: Eduardo da Silva"
                    value={nome}
                    onChangeText={nome => setNome(nome)}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View>
                    <Text>CPF</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="Ex: 999.999.999-99"
                    value={cpf}
                    onChangeText={handleCPFChange}
                    />
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
                    checked={selectedSex === 1}
                    onPress={() => setSex(1)}
                    checkedColor="#249E96"
                    />
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Mulher'
                    checked={selectedSex === 2}
                    onPress={() => setSex(2)}
                    checkedColor="#249E96"
                    />
                    
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View>
                    <Text>Comentários</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder=" Ex: O paciente toma regularmente X remédio" 
                    multiline 
                    numberOfLines={8}
                    editable
                    value={comment}
                    
                    onChangeText={comment => setComment(comment)}
                    />
                </View>
            </View>
                    
        </ScrollView>
            <TouchableOpacity onPress={firstQuiz} style={styles.button_next}>
                <Text style={styles.nextButtonText}>INICIAR</Text>
            </TouchableOpacity>   
        </>
    )
}

export default UserData;

