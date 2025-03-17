import Question from '@/components/question'
import QuestionModel from './model/question'
import style from '@/styles/home.module.css'
import AnswerModel from './model/answer'
import { useState } from 'react'

const questionMock = new QuestionModel(1, 'Question title', [
  AnswerModel.wrongAnswer('Answer A'),
  AnswerModel.wrongAnswer('Answer B'),
  AnswerModel.wrongAnswer('Answer C'),
  AnswerModel.rightAnswer('Answer D'),
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)
  console.log('question:', question)

  function selectedAnswer(index: number) {
    const selectedAnswer = questionMock.answerWith(index)
    console.log('index', index)
    console.log('After answer:', selectedAnswer)
  }

  return (
    <div className={style.home}>
      <Question value={question} onSelectAnswer={selectedAnswer} />
    </div>
  )
}
