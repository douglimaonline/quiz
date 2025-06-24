import QuestionModel from '../../model/question'
import AnswerModel from '../../model/answer'

const questions: QuestionModel[] = [
  new QuestionModel(301, 'Qual é a capital do estado da Bahia?', [
    AnswerModel.wrongAnswer('Recife'),
    AnswerModel.wrongAnswer('Fortaleza'),
    AnswerModel.wrongAnswer('Maceió'),
    AnswerModel.rightAnswer('Salvador'),
  ]),
  new QuestionModel(
    302,
    'Qual é o número da emergência da Polícia Militar no Brasil?',
    [
      AnswerModel.wrongAnswer('1900'),
      AnswerModel.wrongAnswer('192'),
      AnswerModel.wrongAnswer('193'),
      AnswerModel.rightAnswer('190'),
    ]
  ),
  new QuestionModel(
    303,
    'Qual é a sigla do imposto que incide sobre produtos industrializados no Brasil?',
    [
      AnswerModel.wrongAnswer('IPVA'),
      AnswerModel.wrongAnswer('ICMS'),
      AnswerModel.wrongAnswer('ISS'),
      AnswerModel.rightAnswer('IPI'),
    ]
  ),
  new QuestionModel(
    304,
    'Qual é o rio mais extenso que passa pelo território brasileiro?',
    [
      AnswerModel.wrongAnswer('Rio São Francisco'),
      AnswerModel.wrongAnswer('Rio Paraná'),
      AnswerModel.wrongAnswer('Rio Tocantins'),
      AnswerModel.rightAnswer('Rio Amazonas'),
    ]
  ),
  new QuestionModel(301, 'Qual é o maior planeta do sistema solar?', [
    AnswerModel.wrongAnswer('Terra'),
    AnswerModel.wrongAnswer('Marte'),
    AnswerModel.wrongAnswer('Vênus'),
    AnswerModel.rightAnswer('Júpiter'),
  ]),
  new QuestionModel(306, 'Qual é o banco estatal mais antigo do Brasil?', [
    AnswerModel.wrongAnswer('Caixa Econômica Federal'),
    AnswerModel.wrongAnswer('Banco Central'),
    AnswerModel.wrongAnswer('Banco Mercantil'),
    AnswerModel.rightAnswer('Banco do Brasil'),
  ]),
  new QuestionModel(
    307,
    'Em qual cidade brasileira está localizado o Cristo Redentor?',
    [
      AnswerModel.wrongAnswer('Salvador'),
      AnswerModel.wrongAnswer('Belo Horizonte'),
      AnswerModel.wrongAnswer('Brasília'),
      AnswerModel.rightAnswer('Rio de Janeiro'),
    ]
  ),
  new QuestionModel(315, 'Quem foi o primeiro homem a pisar na Lua?', [
    AnswerModel.wrongAnswer('Buzz Aldrin'),
    AnswerModel.wrongAnswer('Yuri Gagarin'),
    AnswerModel.wrongAnswer('Michael Collins'),
    AnswerModel.rightAnswer('Neil Armstrong'),
  ]),
  new QuestionModel(309, 'O que significa o SUS?', [
    AnswerModel.wrongAnswer('Serviço Único da Saúde'),
    AnswerModel.wrongAnswer('Sistema Urbano de Saúde'),
    AnswerModel.wrongAnswer('Saúde Unificada do Sistema'),
    AnswerModel.rightAnswer('Sistema Único de Saúde'),
  ]),
  new QuestionModel(
    310,
    'Qual é o nome do exame nacional utilizado para ingressar nas universidades públicas?',
    [
      AnswerModel.wrongAnswer('PAS'),
      AnswerModel.wrongAnswer('ENAD'),
      AnswerModel.wrongAnswer('OBMEP'),
      AnswerModel.rightAnswer('ENEM'),
    ]
  ),
  new QuestionModel(
    311,
    'Qual desses pratos é típico da culinária nordestina?',
    [
      AnswerModel.wrongAnswer('Feijoada'),
      AnswerModel.wrongAnswer('Churrasco gaúcho'),
      AnswerModel.wrongAnswer('Pão de queijo'),
      AnswerModel.rightAnswer('Baião de dois'),
    ]
  ),
  new QuestionModel(310, 'Quem pintou a obra "A Última Ceia"?', [
    AnswerModel.wrongAnswer('Michelangelo'),
    AnswerModel.wrongAnswer('Rafael'),
    AnswerModel.wrongAnswer('Van Gogh'),
    AnswerModel.rightAnswer('Leonardo da Vinci'),
  ]),
  new QuestionModel(313, 'Quem foi Ayrton Senna?', [
    AnswerModel.wrongAnswer('Cantor'),
    AnswerModel.wrongAnswer('Político'),
    AnswerModel.wrongAnswer('Escritor'),
    AnswerModel.rightAnswer('Piloto de Fórmula 1'),
  ]),
  new QuestionModel(302, 'Qual é a nota que vem depois de Sol?', [
    AnswerModel.wrongAnswer('Si'),
    AnswerModel.wrongAnswer('Mi'),
    AnswerModel.wrongAnswer('Dó'),
    AnswerModel.rightAnswer('Lá'),
  ]),
  new QuestionModel(311, 'Quantos estados tem o Brasil?', [
    AnswerModel.wrongAnswer('25'),
    AnswerModel.wrongAnswer('28'),
    AnswerModel.wrongAnswer('26 e 1 território'),
    AnswerModel.rightAnswer('26 e o Distrito Federal'),
  ]),
]

export default questions
