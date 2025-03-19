import Question from '@/components/question'
import QuestionModel from './model/question'
import style from '@/styles/home.module.css'
import AnswerModel from './model/answer'
import { useState } from 'react'

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

export default function Home() {
  const [question, setQuestion] = useState(questionMock)
  const [timeToAnswer, setTimeToAnswer] = useState(10)

  function selectedAnswer(index: number) {
    setQuestion(question.answerWith(index))
    setTimeToAnswer(0)
  }

  function handleCompleteTimer() {
    setQuestion(question.answerWith(-1))
  }

  return (
    <div className={style.home}>
      <Question
        value={question}
        onSelectAnswer={selectedAnswer}
        onCompleteTimer={handleCompleteTimer}
        timeToAnswer={timeToAnswer}
      />
    </div>
  )
}
