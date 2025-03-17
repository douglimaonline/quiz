import Question from '@/components/question'
import QuestionModel from './model/question'
import style from '@/styles/home.module.css'
import AnswerModel from './model/answer'
import { useState } from 'react'

const questionMock = new QuestionModel(
  1,
  'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
  [
    AnswerModel.wrongAnswer('Answer A'),
    AnswerModel.rightAnswer('Marquês de Pombal'),
    AnswerModel.wrongAnswer('Answer C'),
    AnswerModel.wrongAnswer('Answer D'),
  ]
)

export default function Home() {
  const [question, setQuestion] = useState(questionMock)
  console.log('question:', question)

  function selectedAnswer(index: number) {
    setQuestion(question.answerWith(index))
  }

  return (
    <div className={style.home}>
      <Question value={question} onSelectAnswer={selectedAnswer} />
    </div>
  )
}
