import { useState } from 'react'
import Title from './title'
import style from '@/styles/create.module.css'
import Button from './button'
import QuestionModel from '@/model/question'
import AnswerModel from '@/model/answer'

export default function QuestionCreater() {
  const [statemant, setStatemant] = useState('')
  const [answerA, setanswerA] = useState('')
  const [answerB, setanswerB] = useState('')
  const [answerC, setanswerC] = useState('')
  const [answerD, setanswerD] = useState('')

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
        type="text"
        value={statemant}
        onChange={(e) => setStatemant(e.target.value)}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          value={answerA}
          onChange={(e) => setanswerA(e.target.value)}
        />
        <input
          type="text"
          value={answerB}
          onChange={(e) => setanswerB(e.target.value)}
        />
        <input
          type="text"
          value={answerC}
          onChange={(e) => setanswerC(e.target.value)}
        />
        <input
          type="text"
          value={answerD}
          onChange={(e) => setanswerD(e.target.value)}
        />
      </div>
      <Button text={'Salvar'} onclick={handleClick} />
    </div>
  )
}
