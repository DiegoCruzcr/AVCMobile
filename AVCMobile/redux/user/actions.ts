import { PacienteData } from "./types";
import UserActionTypes from "./action-types";

export const attDadosPaciente = (nome: string, cpf: string, date: string, selectedSex: number, comment: string, idPaciente: number) => ({
    type: UserActionTypes.DADOS,
    nome: nome,
    cpf: cpf,
    dataNascimento: date,
    sexo: selectedSex,
    comentario: comment,
    idPaciente: idPaciente       
})

export const attNotasPaciente = (quiz: Array<Object>) => ({
    type: UserActionTypes.NOTAS,
    quiz: quiz,
})