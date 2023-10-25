import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View, Button } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'
import Etapa from "../Quiz/const";
import { NavigationProp } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { attDadosPaciente2 } from "../../redux/user/actions";
import axios from "axios";
import { attErrorInfo } from "../../redux/errorInfo/actions";
import Dropdown from "../../components/Dropdown";


const ComplementUserData = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [selectedAntiC, setAntiC]  = useState<boolean | null>(null);
    const [antiClass, setAntiClass] = useState('');
    const [selectedSurgery, setSurgery] = useState<boolean | null>(null);
    const [surgeries, setSurgeries] = useState('');
    const [selectedBleeding, setBleeding] = useState<boolean | null>(null);
    const [bleedingType, setBleedingType] = useState('');
    const [infoError, setInfoError] = useState({code: 404, description: 'Ocorreu um erro inesperado.'})
    const [disabled, setDisabled] = useState(true);
    const [disabledBleed, setDisabledBleed] = useState(true);
    const [disabledAntiC, setDisabledAntiC] = useState(true);
    const [antiCheck, setAntiCheck] = useState(false);
    const [surgeryCheck, setSurgeryCheck] = useState(false);
    const [bleedingCheck, setBleedingCheck] = useState(false);
    
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

    const handleSurgeries = (value: string) => {
        setSurgeries(value)
    }

    const handleBleeding = (value: string) => {
        setBleedingType(value);
    }

    interface CheckQuiz {
        step_number: String;
        is_boolean_check: boolean;
        boolean_choice?: boolean | null;
        answer: string;
    }
    
    const [checkQuiz, setCheckQuiz] = useState<CheckQuiz[]>([
        {
          step_number: "0.2",
          boolean_choice: null,
          is_boolean_check: true,
          answer: ''
        },
        {
          step_number: "0.3",
          boolean_choice: null,
          is_boolean_check: true,
          answer: ''
        },
        {
          step_number: "0.31",
          is_boolean_check: false,
          answer: ''
        },
        {
          step_number: "0.4",
          boolean_choice: null,
          is_boolean_check: true,
          answer: ''
        }
      ]);

    const { nome, cpf, sexo, comentario, dataNascimento } = useSelector((state: any) => state.user)
   
    const checkBoxValidate = () => {

        let auxBool = false;
        
        checkQuiz.map((check) => {
            if (check.step_number === "0.2") {
                check.boolean_choice = selectedAntiC;
                if (check.boolean_choice === true) {
                    check.answer = antiClass;
                } else {
                    check.answer = '';
                }
                
            } else if (check.step_number === "0.3") {
                check.boolean_choice = selectedSurgery;
                if (check.boolean_choice === true) {
                    
                    auxBool = true
                    
                } else {
                    auxBool = false;
                }
            } else if (check.step_number === "0.31" && auxBool === true) {
                check.answer = surgeries;
            
            }   else if (check.step_number === "0.31" && auxBool === false) {
                check.answer = '';
            }
             else if (check.step_number === "0.4") {
                check.boolean_choice = selectedBleeding;
                if (check.boolean_choice === true) {
                    check.answer = bleedingType;
                } else {
                    check.answer = '';
                }
            }
        })
        
        setCheckQuiz(checkQuiz);
    }


    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
    };

    const apiDate = (date: String) => {
        const dateWithoutSpaces = date.replace(/\s/g, '');
        const partes = dateWithoutSpaces.split(/[\/\-:]/);        
        
        if (partes.length === 5) {
          const day = partes[0];
          const month = partes[1];
          const year = partes[2];
          const hours = partes[3];
          const minutes = partes[4];
      
          
          const dataFormatada = `${year}-${month}-${day} ${hours}:${minutes}:00`;
      
          return dataFormatada;
        } else {
          return "Formato de data inválido. Use dd/mm/yyyy.";
        }
      }


    const postData = {
        name: nome,
        sex: sexo,
        commentary: comentario,
        cpf: cpf,
        birth_date: dataNascimento,
        last_health_hour: apiDate(formatDate(date)),
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

    const validateForm = () => {
        
        if (selectedAntiC == null || selectedAntiC == true && antiClass == '') {
            setAntiCheck(true)
        } else setAntiCheck(false)
        if (selectedBleeding == null || selectedBleeding == true && bleedingType == '' ) {
            setBleedingCheck(true)
        } else setBleedingCheck(false)
        if (selectedSurgery == null || selectedSurgery == true && surgeries === '') {
            setSurgeryCheck(true)
        } else setSurgeryCheck(false)
    }
    
    const firstQuiz = async () => {  
        checkBoxValidate();
        validateForm();
        
        if (selectedAntiC == null || selectedAntiC == true && antiClass == '' || selectedBleeding == null || selectedBleeding == true && bleedingType == '' || selectedSurgery == null || selectedSurgery == true && surgeries === '') {
            Alert.alert('Por favor, preencha corretamente os campos!')
        }
        else {
            navigation.navigate(
                'quiz', {
                screen: `${Etapa[0].description}`
                })
       
            try {
                const idPaciente = await postApi()
                
                dispatch(attDadosPaciente2(idPaciente, apiDate(formatDate(date)), checkQuiz))
                console.log(checkQuiz);
                
                setOpen(false);
                
            } catch(error: any) {
                
                if (error.response) {
                    const statusCode = error.response.status;
                    console.log(statusCode);
                    setErrorInfo(statusCode)
                    setTimeout(() => navigation.navigate('errorPage'), 500)
                }
            }
        }
    }

    
    return (
        <>
        <ScrollView style={styles.container}>
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
                    checked={selectedAntiC === true}
                    onPress={() => {setAntiC(true), setDisabledAntiC(false)}}
                    checkedColor="#fff"
                    />
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Não'
                    checked={selectedAntiC === false}
                    onPress={() => {setAntiC(false), setDisabledAntiC(true)}}
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
                        value={antiClass}
                        onChangeText={antiClass => setAntiClass(antiClass)}
                    />
                    </View>
                    {antiCheck && <Text style={styles.required}>Por favor, preencha todos os campos.</Text>}
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
                    checked={selectedSurgery === true}
                    onPress={() => {setSurgery(true), setDisabled(false)}}
                    checkedColor="#fff"
                    />
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Não'
                    checked={selectedSurgery === false}
                    onPress={() => {setSurgery(false), setDisabled(true)}}
                    checkedColor="#fff"
                    />
                    </View>
                    <View style={styles.containerSurgery}>
                        <Text style={[disabled ? styles.disabled : {color: '#fff'}]}>Se sim, qual? </Text>
                        
                        <Dropdown disabled={disabled} dados={dadosSurgery} handleClick={handleSurgeries}/>
                        
                    </View>
                    {surgeryCheck && <Text style={styles.required}>Por favor, preencha todos os campos.</Text>}
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
                    checked={selectedBleeding === true}
                    onPress={() => {setBleeding(true), setDisabledBleed(false)}}
                    checkedColor="#fff"
                    />
                    <CheckBox
                    containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                    size={20}
                    textStyle={{color: '#fff', fontSize: 14}}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Não'
                    checked={selectedBleeding === false}
                    onPress={() => {setBleeding(false), setDisabledBleed(true)}}
                    checkedColor="#fff"
                    />
                    </View>
                    <View style={styles.containerSurgery}>
                        <Text style={[disabledBleed ? styles.disabled : {color: '#fff'}]}>Se sim, quando? </Text>
                        <Dropdown disabled={disabledBleed} dados={dadosBleeding} handleClick={handleBleeding}/>
                        
                    </View>
                    {bleedingCheck && <Text style={styles.required}>Por favor, preencha todos os campos.</Text>}
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


