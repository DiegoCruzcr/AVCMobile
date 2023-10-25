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
    reason: string,
    lastHealthHour: String | null,
    checkBox: Array<{step_number: String | null; answer: String | null;  is_boolean_check: boolean; boolean_choice: boolean }>;
}





