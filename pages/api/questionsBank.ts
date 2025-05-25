import QuestionModel from '../../model/question'
import AnswerModel from '../../model/answer'

const questions: QuestionModel[] = [
  new QuestionModel(301, 'Qual é a sexta nota da escala musical?', [
    AnswerModel.wrongAnswer('Mi'),
    AnswerModel.wrongAnswer('Ré'),
    AnswerModel.wrongAnswer('Sol'),
    AnswerModel.rightAnswer('Lá'),
  ]),
  new QuestionModel(302, 'Qual é a nota que vem depois de Sol?', [
    AnswerModel.wrongAnswer('Si'),
    AnswerModel.wrongAnswer('Mi'),
    AnswerModel.wrongAnswer('Dó'),
    AnswerModel.rightAnswer('Lá'),
  ]),
  new QuestionModel(
    303,
    'Qual símbolo indica o início da leitura musical na partitura?',
    [
      AnswerModel.wrongAnswer('Pausa'),
      AnswerModel.wrongAnswer('Compasso'),
      AnswerModel.wrongAnswer('Sustenido'),
      AnswerModel.rightAnswer('Clave'),
    ]
  ),
  new QuestionModel(304, 'Qual é o intervalo entre Dó e Fá?', [
    AnswerModel.wrongAnswer('Segunda maior'),
    AnswerModel.wrongAnswer('Terça menor'),
    AnswerModel.wrongAnswer('Quinta justa'),
    AnswerModel.rightAnswer('Quarta justa'),
  ]),
  new QuestionModel(305, 'Quantos sustenidos tem a escala de Ré maior?', [
    AnswerModel.wrongAnswer('1 sustenido'),
    AnswerModel.wrongAnswer('3 sustenidos'),
    AnswerModel.wrongAnswer('4 sustenidos'),
    AnswerModel.rightAnswer('2 sustenidos'),
  ]),
  new QuestionModel(306, 'Qual é o 6º grau no campo harmônico de Sol maior?', [
    AnswerModel.wrongAnswer('Am'),
    AnswerModel.wrongAnswer('Bm'),
    AnswerModel.wrongAnswer('F#m'),
    AnswerModel.rightAnswer('Em'),
  ]),
  new QuestionModel(
    307,
    'Qual desses acordes representa o modo menor natural?',
    [
      AnswerModel.wrongAnswer('C – D – E – F – G – A – B'),
      AnswerModel.wrongAnswer('C – D – Eb – F – G – A – B'),
      AnswerModel.wrongAnswer('C – D – Eb – F – G – Ab – B'),
      AnswerModel.rightAnswer('C – D – Eb – F – G – Ab – Bb'),
    ]
  ),
  new QuestionModel(308, 'Qual é o tom relativo menor de Sol maior?', [
    AnswerModel.wrongAnswer('Dó menor'),
    AnswerModel.wrongAnswer('Lá menor'),
    AnswerModel.wrongAnswer('Si menor'),
    AnswerModel.rightAnswer('Mi menor'),
  ]),
  new QuestionModel(309, 'Qual é a tríade que forma o acorde de Ré menor?', [
    AnswerModel.wrongAnswer('D – F# – A'),
    AnswerModel.wrongAnswer('D – G – A'),
    AnswerModel.wrongAnswer('D – E – G'),
    AnswerModel.rightAnswer('D – F – A'),
  ]),
  new QuestionModel(
    310,
    'Qual é o grau dominante no campo harmônico de Lá menor?',
    [
      AnswerModel.wrongAnswer('F'),
      AnswerModel.wrongAnswer('E♭'),
      AnswerModel.wrongAnswer('C'),
      AnswerModel.rightAnswer('E'),
    ]
  ),
  new QuestionModel(
    311,
    'Qual modo grego começa na segunda nota da escala maior?',
    [
      AnswerModel.wrongAnswer('Jônio'),
      AnswerModel.wrongAnswer('Frígio'),
      AnswerModel.wrongAnswer('Lídio'),
      AnswerModel.rightAnswer('Dórico'),
    ]
  ),
  new QuestionModel(312, 'Qual dessas escalas é considerada exótica?', [
    AnswerModel.wrongAnswer('Escala maior'),
    AnswerModel.wrongAnswer('Escala menor natural'),
    AnswerModel.wrongAnswer('Escala dórica'),
    AnswerModel.rightAnswer('Escala cigana'),
  ]),
  new QuestionModel(313, 'O que caracteriza um acorde diminuto?', [
    AnswerModel.wrongAnswer('3ª maior e 5ª justa'),
    AnswerModel.wrongAnswer('3ª menor e 5ª justa'),
    AnswerModel.wrongAnswer('3ª maior e 5ª aumentada'),
    AnswerModel.rightAnswer('3ª menor e 5ª diminuta'),
  ]),
  new QuestionModel(
    314,
    'Qual é a função harmônica de um acorde do 7º grau no campo harmônico maior?',
    [
      AnswerModel.wrongAnswer('Subdominante'),
      AnswerModel.wrongAnswer('Tônica'),
      AnswerModel.wrongAnswer('Dominante secundário'),
      AnswerModel.rightAnswer('Função dominante'),
    ]
  ),
  new QuestionModel(315, 'Qual é a sequência de graus do modo frígio?', [
    AnswerModel.wrongAnswer('1 – 2 – 3 – 4 – 5 – 6 – 7'),
    AnswerModel.wrongAnswer('1 – 2 – 3 – 4 – 5 – 6 – 7♭'),
    AnswerModel.wrongAnswer('1 – 2 – 3♭ – 4 – 5♭ – 6 – 7'),
    AnswerModel.rightAnswer('1 – 2♭ – 3♭ – 4 – 5 – 6♭ – 7♭'),
  ]),
]

export default questions
