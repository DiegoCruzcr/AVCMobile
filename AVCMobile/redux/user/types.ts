export interface PacienteData {
    userReducer: any;
    nome: string | null,
    dataNascimento: String | null,
    sexo: number | null,
    comentario: string | null,
    cpf: string | null,
    quiz: Array<{stepNumber: number | null; degree: number}>;
    nota: number | null,
    idPaciente: string | null,
    aiAnalysis: string | null,
    reason: string,
    checkIn: string 
}





