import { Pacientes } from "../pages/UserData/data";

const saveUserData = (nome, dataNascimento, sexo, comment) => {

    const formattedDate = dataNascimento instanceof Date
    ? dataNascimento.toISOString().split('T')[0]
    : dataNascimento;


    const userData = {
        nome: nome,
        dataNascimento: formattedDate,
        sexo: sexo,
        comentario: comment,
    }

    Pacientes.push(userData);
}

export default saveUserData;