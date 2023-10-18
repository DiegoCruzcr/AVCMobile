import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'
import Etapa from "../Quiz/const";
import { NavigationProp } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { attDadosPaciente } from "../../redux/user/actions";
import { PacienteData } from "../../redux/user/types";
import axios from "axios";
import { attErrorInfo } from "../../redux/errorInfo/actions";
import Dropdown from "../../components/Dropdown";


const ComplementUserData = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [selectedAntiC, setAntiC] = useState(0);
    const [selectedSurgery, setSurgery] = useState(0);
    const [selectedBleeding, setBleeding] = useState(0);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [comment, setComment] = useState('');
    const [checkIn, setCheckIn] = useState(new Date());
    const [nomeCheck, setNomeCheck] = useState(false);    
    const [sexCheck, setSexCheck] = useState(false);    
    const [cpfCheck, setCpfCheck] = useState(false);    
    const [dataCheck, setDataCheck] = useState(false);   
    const [infoError, setInfoError] = useState({code: 404, description: 'Ocorreu um erro inesperado.'})
    const [disabled, setDisabled] = useState(true);
    const [disabledBleed, setDisabledBleed] = useState(true);
    const [disabledAntiC, setDisabledAntiC] = useState(true);
    const dadosSurgery = [
        'Neuro',
        'Aparelho Digestivo',
        'Cardíaca',
        'Vascular',
        'Cervical',
        'Carótida'
      ];
    const dadosBleeding = [
        'Nos últimos três meses',
        'Entre três meses e um ano',
        'Mais do que um ano'
    ]
   

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
      };


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

    // async function postApi() {
    //     try {
    //         const response = await axios.post('https://f1gl44wn74.execute-api.us-east-1.amazonaws.com/Prod/patient', postData);
    //         console.log(response);
    //         console.log(response.data.patientId);
            
    //         return response.data.patientId;         
    //     } catch(error: any) {
    //         if (error.response) {
    //             const statusCode = error.response.status;
    //             console.log(statusCode);
    //             setErrorInfo(statusCode)
    //             navigation.navigate('errorPage')
    //         }
    //     }
    // }
    
    const firstQuiz = async () => {  
        navigation.navigate(
            'quiz', {
            screen: `${Etapa[0].description}`
            })
        // validateForm()
        // if (selectedSex != 1 && selectedSex != 2 || !nome || !cpf || cpf.length < 14) {
        //     Alert.alert('Preencha todos os campos obrigatórios!')
        // }
        // else {
            
        //     navigation.navigate(
        //         'quiz', {
        //         screen: `${Etapa[0].description}`
        //         })
        //     try {
        //         const idPaciente = await postApi()
        //         dispatch(attDadosPaciente(nome, cpf, formatDate(date), selectedSex, comment, idPaciente, formatDate(checkIn)))
        //         setOpen(false);
                
        //     } catch(error: any) {
        //         if (error.response) {
        //             const statusCode = error.response.status;
        //             console.log(statusCode);
        //             setErrorInfo(statusCode)
        //             setTimeout(() => navigation.navigate('errorPage'), 500)
        //         }
        //     }
        // }
    }

    
    return (
        <>
        <ScrollView style={styles.container}>
    
            {/* <View style={styles.inputContainer}>
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
            </View> */}
            {/* <View style={styles.inputContainer}>
                <View>
                    <View style={styles.textWrapper}>
                    <Text style={styles.titleText}>CPF</Text>
                    
                    </View>
                    {cpfCheck && 
                    <View> 
                        <Text style={styles.required}>Por favor, preencha todos os campos obrigatórios.</Text>  
                        <Text style={styles.required}>Verifique se o CPF inserido possui 11 dígitos.</Text>
                    </View>}
                    <TextInput 
                    style={styles.input}
                    placeholder="Ex: 999.999.999-99"
                    value={cpf}
                    onChangeText={handleCPFChange}
                    />
                </View>
            </View> */}
            <View style={styles.inputContainer}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.titleText}>Quando o paciente foi visto bem pela ultima vez?</Text>
                    </View>
                    <TouchableOpacity style={styles.inputData} onPress={() => setOpen(true)}>
                        <Text >{formatDate(date)}</Text>
                        <Icon  name="calendar" size={20}></Icon>
                    </TouchableOpacity>
                    <DatePicker 
                    modal open={open} 
                    mode="datetime" 
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
                        
                <Text style={styles.titleText}>Uso de anticoagulante?</Text> 
                </View>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>

                    
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Sim'
                    checked={selectedAntiC === 1}
                    onPress={() => {setAntiC(1), setDisabledAntiC(false)}}
                    checkedColor="#fff"
                    />
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Não'
                    checked={selectedAntiC === 2}
                    onPress={() => {setAntiC(2), setDisabledAntiC(true)}}
                    checkedColor="#fff"
                    />
                    </View>
                    <View style={!disabledAntiC ? styles.containerAntiC : styles.containerAntiCDisabled}>
                        <Text style={{marginEnd: 10, color: '#fff'}}>Classe: </Text>
                        <TextInput 
                        style={styles.inputAntiC}
                        placeholder="Ex: Heparinas"
                        placeholderTextColor={'#fff'}
                        editable={!disabledAntiC}
                    />
                    </View>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.textWrapper}>
                        
                <Text style={styles.titleText}>Passou por cirurgias nos últimos 3 meses?</Text> 
                
                </View>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Sim'
                    checked={selectedSurgery === 1}
                    onPress={() => {setSurgery(1), setDisabled(false)}}
                    checkedColor="#fff"
                    />
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Não'
                    checked={selectedSurgery === 2}
                    onPress={() => {setSurgery(2), setDisabled(true)}}
                    checkedColor="#fff"
                    />
                    </View>
                    <View style={styles.containerSurgery}>
                        <Text style={[disabled ? styles.disabled : {color: '#fff'}]}>Se sim, qual? </Text>
                        
                        <Dropdown disabled={disabled} dados={dadosSurgery}/>
                        
                    </View>
                </View>
                
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.textWrapper}>
                        
                <Text style={styles.titleText}>Possui histórico de sangramento cerebral ou digestivo?</Text> 
                
                </View>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Sim'
                    checked={selectedBleeding === 1}
                    onPress={() => {setBleeding(1), setDisabledBleed(false)}}
                    checkedColor="#fff"
                    />
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Não'
                    checked={selectedBleeding === 2}
                    onPress={() => {setBleeding(2), setDisabledBleed(true)}}
                    checkedColor="#fff"
                    />
                    </View>
                    <View style={styles.containerSurgery}>
                        <Text style={[disabledBleed ? styles.disabled : {color: '#fff'}]}>Se sim, qual? </Text>
                        
                        <Dropdown disabled={disabledBleed} dados={dadosBleeding}/>
                        
                    </View>
                </View>
                
            </View>
            
                    
        </ScrollView>
                    
            <TouchableOpacity onPress={firstQuiz} style={styles.button_next}>
                <Text style={styles.nextButtonText}>INICIAR</Text>
            </TouchableOpacity>   
        </>
    )
}

export default ComplementUserData;


