interface Etapas {
    description : string;
    hint: string,
    questions: string[]
}

const Etapa: Array<Etapas> = [
    {
        description :'Etapa 1 | Nível de Consciência',
        hint: 'O investigador deve escolher uma resposta mesmo se uma avaliação completa é prejudicada por obstáculos como um tubo orotraqueal, barreiras de linguagem, trauma ou curativo orotraqueal. Um 3 é dado apenas se o paciente não faz nenhum movimento (outro além de postura reflexa) em resposta à estimulação dolorosa.',
        questions: ['Alerta; reponde com entusiasmo', 'Não alerta, mínima estimulação obedece, responde ou reage.', 'Não alerta, requer repetida estimulação ou estimulação dolorosa', 'Responde somente com reflexo motor ou reações autonômicas']
    },
    {
        description: 'Etapa 1.1 | Orientação',
        hint: 'O paciente é questionado sobre o mês e sua idade. A resposta deve ser correta – não há nota parcial por chegar perto. Pacientes com afasia ou esturpor que não compreendem as perguntas irão receber.',
        questions: ['Responde ambas as questões corretamente', 'Responde uma questão corretamente.', 'Não responde nenhuma questão corretamente.']
    },
    {
        description: 'Etapa 1.2 | Comandos',
        hint: 'O paciente é solicitado a abrir e fechar os olhos e então abrir e fechar a mão não parética. Substitua por outro comando de um único passo se as mãos não podem ser utilizadas. É dado credito se uma tentativa inequívoca é feita, mas não completada devido à fraqueza.',
        questions: ['Responde ambas as questões corretamente', 'Responde uma questão corretamente.', 'Não responde nenhuma questão corretamente.']
    }
    
]

export default Etapa;