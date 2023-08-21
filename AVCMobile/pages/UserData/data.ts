interface data {
    nome: string,
    dataNascimento: (String | Date),
    sexo: Sexo,
    comentario: string | null,
    nota: number | null
}

enum Sexo {
    Homem = 'Homem',
    Mulher = 'Mulher'
}

export const Pacientes: Array<data> = [
    {
        nome: "Gustavo Omai",
        dataNascimento: "1990-01-19",
        sexo: Sexo.Homem,
        comentario: 'Gay',
        nota: 22
    },
]

