import Questionnaire from '@/components/questionnaire'
import QuestionModel from './model/question'
import style from '@/styles/home.module.css'
import AnswerModel from './model/answer'
import { useEffect, useState } from 'react'

const questionMock = new QuestionModel(
  1,
  'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
  [
    AnswerModel.wrongAnswer('Caju'),
    AnswerModel.rightAnswer('Abóbora'),
    AnswerModel.wrongAnswer('Côco'),
    AnswerModel.wrongAnswer('Chuchu'),
  ]
)

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [question, setQuestion] = useState<QuestionModel>(questionMock)
  const [timeToAnswer, setTimeToAnswer] = useState(10)
  const [questionIds, setQuestionIds] = useState<number[]>([])

  async function getQuestionIds() {
    const resp = await fetch(`${BASE_URL}/questionnaire`)
    const data = await resp.json()
    setQuestionIds(data)
  }

  async function getQuestionById(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const data = await resp.json()
    const question = QuestionModel.questionFromJson(data)
    setQuestion(question)
  }

  useEffect(() => {
    getQuestionIds()
  }, [])

  useEffect(() => {
    questionIds.length && getQuestionById(questionIds[0])
  }, [questionIds])

  function selectedAnswer(question: QuestionModel) {
    setTimeToAnswer(0)
    setQuestion(question.answerWith(question.id))
  }

  function handleCompleteTimer() {
    setTimeToAnswer(0)
    setQuestion(question.answerWith(-1))
  }

  return (
    <div className={style.home}>
      <Questionnaire
        question={question}
        lastQuestion={false}
        answeredQuestion={selectedAnswer}
        nextStep={handleCompleteTimer}
        timeToAnswer={timeToAnswer}
      />
    </div>
  )
}
