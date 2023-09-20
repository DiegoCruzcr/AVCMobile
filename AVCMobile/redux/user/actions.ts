import UserActionTypes from "./action-types";

export const attDadosPaciente = (nome: string, cpf: string, date: string, selectedSex: number, comment: string, idPaciente: string, checkIn: string) => ({
    type: UserActionTypes.DADOS,
    nome: nome,
    cpf: cpf,
    dataNascimento: date,
    sexo: selectedSex,
    comentario: comment,
    idPaciente: idPaciente,
    checkIn: checkIn       
})

export const attNotasPaciente = (quiz: Array<Object>) => ({
    type: UserActionTypes.NOTAS,
    quiz: quiz,
})

export const resetPaciente = () => ({
    type: UserActionTypes.RESET
})