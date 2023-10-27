interface Etapas {
    description: string;
    hint: string,
    questions: string[],
    hasNT: boolean
}

const Etapa: Array<Etapas> = [
    {
        description: 'Etapa 1 | Nível de Consciência',
        hint: 'O investigador deve escolher uma resposta mesmo se uma avaliação completa é prejudicada por obstáculos como um tubo orotraqueal, barreiras de linguagem, trauma ou curativo orotraqueal. Um 3 é dado apenas se o paciente não faz nenhum movimento (outro além de postura reflexa) em resposta à estimulação dolorosa.',
        questions: ['Alerta; reponde com entusiasmo', 'Não alerta, mínima estimulação obedece, responde ou reage', 'Não alerta, requer repetida estimulação ou estimulação dolorosa', 'Responde somente com reflexo motor ou reações autonômicas'],
        hasNT: false
    },
    {
        description: 'Etapa 1.1 | Orientação',
        hint: 'O paciente é questionado sobre o mês e sua idade. A resposta deve ser correta – não há nota parcial por chegar perto. Pacientes com afasia ou estupor que não compreendem as perguntas irão receber nota 2.',
        questions: ['Responde ambas as questões corretamente', 'Responde uma questão corretamente', 'Não responde nenhuma questão corretamente'],
        hasNT: false
    },
    {
        description: 'Etapa 1.2 | Comandos',
        hint: 'O paciente é solicitado a abrir e fechar os olhos e então abrir e fechar a mão não parética. Substitua por outro comando de um único passo se as mãos não podem ser utilizadas. É dado credito se uma tentativa inequívoca é feita, mas não completada devido à fraqueza.',
        questions: ['Responde ambas as questões corretamente', 'Responde uma questão corretamente', 'Não responde nenhuma questão corretamente'],
        hasNT: false
    },
    {
        description: 'Etapa 2 | Olhar',
        hint: 'Somente os movimentos oculares horizontais são testados. Movimentos oculares voluntários ou reflexos (óculo-cefálico) recebem nota, mas a prova calórica não é usada. Se o paciente tem um desvio conjugado do olhar, que pode ser sobreposto por atividade voluntária ou reflexa, o escore será 1.',
        questions: ['Normal', 'Paralisia parcial do olhar', 'Desvio forçado ou paralisia total do olhar'],
        hasNT: false
    },
    {
        description: 'Etapa 3 | Campos Visuais',
        hint: 'Os campos visuais (quadrantes superiores e inferiores) são testados por confrontação, utilizando contagem de dedos ou ameaça visual, conforme apropriado. O paciente deve ser encorajado, mas se olha para o lado do movimento dos dedos, deve ser considerado como normal. Se houver cegueira unilateral ou enucleação, os campos visuais no olho restante são avaliados.',
        questions: ['Sem perda visual', 'Hemianopsia parcial', 'Hemianopsia completa', 'Hemianopsia bilateral (cego, incluindo cegueira cortical)'],
        hasNT: false
    },
    {
        description: 'Etapa 4 | Paralisia Facial',
        hint: 'Pergunte ou use pantomima para encorajar o paciente a mostrar os dentes ou sorrir e fechar os olhos. Considere a simetria de contração facial em resposta a estímulo doloroso em paciente pouco responsivo ou incapaz de compreender. Na presença de trauma /curativo facial, tubo orotraqueal, esparadrapo ou outra barreira física que obscureça a face, estes devem ser removidos, tanto quanto possível.',
        questions: ['Movimentos normais simétricos', 'Paralisia facial leve', 'Paralisia facial central evidente', 'Paralisia facial completa'],
        hasNT: false
    },
    {
        description: 'Etapa 5 | Motor dos Braços Esquerdo',
        hint: 'O braço é colocado na posição apropriada: extensão dos braços (palmas para baixo) a 90o (se sentado) ou a 45o (se deitado). É valorizada queda do braço se esta ocorre antes de 10 segundos. O paciente afásico é encorajado através de firmeza na voz e de pantomima, mas não com estimulação dolorosa.',
        questions: ['Sem queda; mantém o braço 90 (ou 45) por 10 segundos completos', 'Queda; mantém o braço a 90 (ou 45)', 'Algum esforço contra a gravidade; o braço não atinge ou não mantém 90 (ou 45)', 'Nenhum esforço contra a gravidade; braço despenca', 'Nenhum movimento', 'Amputação ou fusão articular'],
        hasNT: true
    },
    {
        description: 'Etapa 5.1 | Motor dos Braços Direito',
        hint: 'O braço é colocado na posição apropriada: extensão dos braços (palmas para baixo) a 90o (se sentado) ou a 45o (se deitado). É valorizada queda do braço se esta ocorre antes de 10 segundos. O paciente afásico é encorajado através de firmeza na voz e de pantomima, mas não com estimulação dolorosa.',
        questions: ['Sem queda; mantém o braço 90 (ou 45) por 10 segundos completos', 'Queda; mantém o braço a 90 (ou 45)', 'Algum esforço contra a gravidade; o braço não atinge ou não mantém 90 (ou 45)', 'Nenhum esforço contra a gravidade; braço despenca', 'Nenhum movimento', 'Amputação ou fusão articular'],
        hasNT: true
    },
    {
        description: 'Etapa 6 | Motor das Pernas Esquerda',
        hint: 'A perna é colocada na posição apropriada: extensão a 30o (sempre na posição supina). É valorizada queda do braço se esta ocorre antes de 5 segundos. O paciente afásico é encorajado através de firmeza na voz e de pantomima, mas não com estimulação dolorosa. Cada membro é testado isoladamente.',
        questions: ['Sem queda; mantém a perna a 30o por 5 segundos completos', 'Queda; mantém a perna a 30o , porém esta apresenta queda antes dos 5s', 'Algum esforço contra a gravidade; a perna não atinge ou não mantém 30', 'Nenhum esforço contra a gravidade; perna despenca', 'Nenhum movimento', 'Amputação ou fusão articular'],
        hasNT: true
    },
    {
        description: 'Etapa 6.1 | Motor das Pernas Direita',
        hint: 'A perna é colocada na posição apropriada: extensão a 30o (sempre na posição supina). É valorizada queda do braço se esta ocorre antes de 5 segundos. O paciente afásico é encorajado através de firmeza na voz e de pantomima, mas não com estimulação dolorosa. Cada membro é testado isoladamente.',
        questions: ['Sem queda; mantém a perna a 30o por 5 segundos completos', 'Queda; mantém a perna a 30o , porém esta apresenta queda antes dos 5s', 'Algum esforço contra a gravidade; a perna não atinge ou não mantém 30', 'Nenhum esforço contra a gravidade; perna despenca', 'Nenhum movimento', 'Amputação ou fusão articular'],
        hasNT: true
    },
    {
        description: 'Etapa 7 | Ataxia de Membros',
        hint: 'Teste com os olhos abertos. Em caso de defeito visual, assegure-se que o teste é feito no campo visual intacto. Os testes índex-nariz e calcanhar-joelho são realizados em ambos os lados e a ataxia é valorizada, somente, se for desproporcional á fraqueza. A ataxia é considerada ausente no paciente que não pode entender ou está hemiplégico.',
        questions: ['Ausente', 'Presente em 1 membro', 'Presente em dois membros', 'Amputação ou fusão articular'],
        hasNT: true
    },
    {
        description: 'Etapa 8 | Sensibilidade',
        hint: 'Avalie sensibilidade ou mímica facial ao beliscar ou retirada do estímulo doloroso em paciente torporoso ou afásico. Somente a perda de sensibilidade atribuída ao AVC é registrada como anormal e o examinador deve testar tantas áreas do corpo (braços [exceto mãos], pernas, tronco e face) quantas forem necessárias para checar acuradamente um perda hemisensitiva.',
        questions: ['Normal; nenhuma perda', 'Perda sensitiva leve a moderada', 'Perda da sensibilidade grave ou total; o paciente não sente que estás sendo tocado'],
        hasNT: false
    },
    {
        description: 'Etapa 9 | Melhor Linguagem',
        hint: 'Uma grande quantidade de informações acerca da compreensão pode obtida durante a aplicação dos itens precedentes do exame. O paciente é solicitado a descrever o que está acontecendo no quadro em anexo, a nomear os itens na lista de identificação anexa e a ler da lista de sentença anexa.',
        questions: ['Sem afasia; normal', 'Afasia leve a moderada', 'Afasia grave', 'Mudo, afasia global'],
        hasNT: false
    },
    {
        description: 'Etapa 10 | Disartria',
        hint: 'Uma grande quantidade de informações acerca da compreensão pode obtida durante a aplicação dos itens precedentes do exame. O paciente é solicitado a descrever o que está acontecendo no quadro em anexo, a nomear os itens na lista de identificação anexa e a ler da lista de sentença anexa.',
        questions: ['Normal', 'Disartria leve a moderada', 'Disartria grave', 'Intubado ou outra barreira física'],
        hasNT: true
    },
    {
        description: 'Etapa 11 | Desatenção',
        hint: 'Informação suficiente para a identificação de negligência pode ter sido obtida durante os testes anteriores. Se o paciente tem perda visual grave, que impede o teste da estimulação visual dupla simultânea, e os estímulos cutâneos são normais, o escore é normal.',
        questions: ['Nenhuma anormalidade', 'Desatenção visual, tátil, auditiva, espacial ou pessoal', 'Profunda hemi-desatenção ou hemidesatenção para mais de uma modalidade'],
        hasNT: true
    },
]

export default Etapa;