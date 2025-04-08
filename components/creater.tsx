import { useState } from 'react'
import style from '@/styles/create.module.css'
import Title from './title'
import CreateAnswer from './createAnswer'
import Button from './button'
import QuestionModel from '@/model/question'
import AnswerModel from '@/model/answer'

export default function QuestionCreater() {
  const [statemant, setStatemant] = useState('')
  const [answerA, setAnswerA] = useState('')
  const [answerB, setAnswerB] = useState('')
  const [answerC, setAnswerC] = useState('')
  const [answerD, setAnswerD] = useState('')

  function handleClick() {
    const answersValue = [answerA, answerB, answerC, answerD]
    const answers = answersValue.map((answer, i) => {
      return i === 0
        ? AnswerModel.rightAnswer(answer)
        : AnswerModel.wrongAnswer(answer)
    })
    const question = new QuestionModel(5, statemant, answers, false)
    localStorage.setItem('question', JSON.stringify(question.toObject()))
  }

  return (
    <div className={style.create}>
      <Title text={'Crie Seu Quiz'} />
      <input
        style={{ minHeight: '100px' }}
        type="text"
        value={statemant}
        onChange={(e) => setStatemant(e.target.value)}
      />
      <div className={style.answers}>
        <CreateAnswer correctAnswer={true} onChange={(e) => setAnswerA(e)} />
        <CreateAnswer correctAnswer={false} onChange={(e) => setAnswerB(e)} />
        <CreateAnswer correctAnswer={false} onChange={(e) => setAnswerC(e)} />
        <CreateAnswer correctAnswer={false} onChange={(e) => setAnswerD(e)} />
      </div>
      <Button text={'Salvar'} onclick={handleClick} />
    </div>
  )
}
