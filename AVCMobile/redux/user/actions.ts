import UserActionTypes from "./action-types";

export const attDadosPaciente = (nome: string, cpf: string, date: string, selectedSex: number, comment: string, checkIn: string) => ({
    type: UserActionTypes.DADOS,
    nome: nome,
    cpf: cpf,
    dataNascimento: date,
    sexo: selectedSex,
    comentario: comment,
    checkIn: checkIn       
})

export const attDadosPaciente2 = (idPaciente: string, lastHealthHour: string) => ({
    type: UserActionTypes.DADOS2,
    lastHealthHour: lastHealthHour,
    idPaciente: idPaciente
          
})

export const attNotasPaciente = (quiz: Array<Object>) => ({
    type: UserActionTypes.NOTAS,
    quiz: quiz,
})

export const resetPaciente = () => ({
    type: UserActionTypes.RESET
})