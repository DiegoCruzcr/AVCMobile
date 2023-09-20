import UserActionTypes from "./action-types";
import { PacienteData } from "./types";

const initialState = {
    nome: null,
    dataNascimento: "",
    sexo: 1,
    comentario: null,
    cpf: '',
    quiz: [
        {
            degree: 0,
            step_number: 1,
        },
        {
            degree: 0,
            step_number: 1.1,
        },
        {
            degree: 0,
            step_number: 1.2,
        },
        {
            degree: 0,
            step_number: 2,
        },
        {
            degree: 0,
            step_number: 3,
        },
        {
            degree: 0,
            step_number: 4,
        },
        {
            degree: 0,
            step_number: 5,
        },
        {
            degree: 0,
            step_number: 5.1,
        },
        {
            degree: 0,
            step_number: 6,
        },
        {
            degree: 0,
            step_number: 6.1,
        },
        {
            degree: 0,
            step_number: 7,
        },
        {
            degree: 0,
            step_number: 8,
        },
        {
            degree: 0,
            step_number: 9,
        },
        {
            degree: 0,
            step_number: 10,
        },
        {
            degree: 0,
            step_number: 11,
        }
    ],
    nota: 0,
    idPaciente: null,
    aiAnalysis: '85% Avc',
    reason: 'AVC',
    checkIn: '',
} as unknown as PacienteData;

    const userReducer = (state = initialState, action: any) => {
        switch(action.type) {
            case UserActionTypes.DADOS:
                return {
                    ...state,
                    nome: action.nome,
                    dataNascimento: action.dataNascimento,
                    cpf: action.cpf,
                    comentario: action.comentario,
                    sexo: action.sexo,
                    idPaciente: action.idPaciente,
                    checkIn: action.checkIn
                }
            case UserActionTypes.NOTAS:
                return {
                    ...state,
                    nota: action.nota,
                    quiz: action.quiz
                }
            case UserActionTypes.RESET:
                return initialState;    
            default:
                return state;
        }        
    }

export default userReducer;