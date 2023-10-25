import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'
import { NavigationProp } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { attDadosPaciente } from "../../redux/user/actions";
import axios from "axios";
import { attErrorInfo } from "../../redux/errorInfo/actions";

const UserData = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [selectedSex, setSex] = useState(0);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [comment, setComment] = useState('');
    const [checkIn, setCheckIn] = useState(new Date());
    const [nomeCheck, setNomeCheck] = useState(false);    
    const [sexCheck, setSexCheck] = useState(false);    
    const [dataCheck, setDataCheck] = useState(false);   
    const [infoError, setInfoError] = useState({code: 404, description: 'Ocorreu um erro inesperado.'})
   

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${day}/${month}/${year}`;
      };

      const apiDate = (date: String) => {
        const partes = date.split('/');

        
        if (partes.length === 3) {
          const day = partes[0];
          const month = partes[1];
          const year = partes[2];
      
          
          const dataFormatada = `${year}-${month}-${day}`;
      
          return dataFormatada;
        } else {
          return "Formato de data inválido. Use dd/mm/yyyy.";
        }
      }

    const dispatch = useDispatch();

    const setErrorInfo = (statusCode : number) => {
        switch (statusCode) {
            case 400:
              setInfoError({code: 400, description: 'Requisição inválida.'});
              break;
            case 401:
              setInfoError({code: 401, description: 'Não autorizado. Faça login.'});
              break;
            case 403:
              setInfoError({code: 403, description: 'Acesso proibido.'});
              break;
            case 404:
              setInfoError({code: 404, description: 'Recurso não encontrado.'});
              break;
            default:
              setInfoError({code: 500, description: 'Ocorreu um erro inesperado.'});
              break;
          }
          dispatch(attErrorInfo(infoError.code, infoError.description))
    }

    async function postApi() {
        try {
            const response = await axios.post('https://f1gl44wn74.execute-api.us-east-1.amazonaws.com/Prod/patient', postData);
            console.log(response);
            console.log(response.data.patientId);
            
            return response.data.patientId;         
        } catch(error: any) {
            if (error.response) {
                const statusCode = error.response.status;
                console.log(statusCode);
                setErrorInfo(statusCode)
                navigation.navigate('errorPage')
            }
        }
    }
    
    const firstQuiz = () => {  
        validateForm();
        if (selectedSex != 1 && selectedSex != 2 || !nome) { 
            Alert.alert('Preencha todos os campos obrigatórios!')      
        }
        else {
            dispatch(attDadosPaciente(nome, CpfApi(cpf), apiDate(formatDate(date)), selectedSex, comment, apiDate(formatDate(checkIn))))
            navigation.navigate(
                'complementUserData')
        }
    }


    const validateForm = () => {
        
        if (selectedSex != 1 && selectedSex != 2) {
            setSexCheck(true)
        } else setSexCheck(false)
        if (!nome) {
            setNomeCheck(true)
        } else setNomeCheck(false)
        if (!date) {
            setDataCheck(true)
        } else setDataCheck(false)
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

      const CpfApi = (cpf: string) => {
        const numericCPF = cpf.replace(/\D/g, '');

        return numericCPF;
      }

      const postData = {
        name: nome,
        sex: selectedSex,
        commentary: comment,
        cpf: CpfApi(cpf),
        birth_date: formatDate(date)
    } 
    
    return (
        <>
        <ScrollView style={styles.container}>
    
            <View style={styles.inputContainer}>
                <View>
                    <View style={styles.textWrapper}>
                    <Text style={styles.titleText}>Nome do Paciente</Text>
                    <Text style={styles.required}>*</Text>
                    </View>
                    {nomeCheck && <Text style={styles.required}>Por favor, preencha todos os campos obrigatórios.</Text>}
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
                    <View style={styles.textWrapper}>
                    <Text style={styles.titleText}>CPF</Text>
                    
                    </View>
                    <TextInput 
                    style={styles.input}
                    placeholder="Ex: 999.999.999-99"
                    value={cpf}
                    onChangeText={handleCPFChange}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.titleText}>Data de Nascimento</Text>
                        <Text style={styles.required}>*</Text>
                    </View>
                    {dataCheck && <Text style={styles.required}>Por favor, preencha todos os campos obrigatórios.</Text>}
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
                <View style={styles.textWrapper}>
                        
                <Text style={styles.titleText}>Sexo</Text> 
                <Text style={styles.required}>*</Text>
                </View>
                {sexCheck && <Text style={styles.required}>Por favor, preencha todos os campos obrigatórios.</Text>}
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
                    checkedColor="#fff"
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
                    checkedColor="#fff"
                    />
                    
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View>
                    <Text style={styles.titleText}>Comentários</Text>
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
                <Text style={styles.nextButtonText}>PRÓXIMO</Text>
            </TouchableOpacity>   
        </>
    )
}

export default UserData;


