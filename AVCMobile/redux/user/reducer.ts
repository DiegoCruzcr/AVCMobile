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
            stepNumber: 1,
            degree: 0
        },
        {
            stepNumber: 1.1,
            degree: 0
        },
        {
            stepNumber: 1.2,
            degree: 0
        },
        {
            stepNumber: 2,
            degree: 0
        },
        {
            stepNumber: 3,
            degree: 0
        },
        {
            stepNumber: 4,
            degree: 0
        },
        {
            stepNumber: 5,
            degree: 0
        },
        {
            stepNumber: 5.1,
            degree: 0
        },
        {
            stepNumber: 6,
            degree: 0
        },
        {
            stepNumber: 6.1,
            degree: 0
        },
        {
            stepNumber: 7,
            degree: 0
        },
        {
            stepNumber: 8,
            degree: 0
        },
        {
            stepNumber: 9,
            degree: 0
        },
        {
            stepNumber: 10,
            degree: 0
        },
        {
            stepNumber: 11,
            degree: 0
        }
    ],
    nota: 22,
    idPaciente: null,
    aiAnalysis: '85% Avc',
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
                    idPaciente: action.idPaciente
                }
            case UserActionTypes.NOTAS:
                return {
                    ...state,
                    nota: action.nota,
                    quiz: action.quiz
                }
            default:
                return state;
        }        
    }

export default userReducer;