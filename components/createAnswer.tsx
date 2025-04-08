import styles from '@/styles/create.module.css'
import { useState } from 'react'

interface CreateAnswerProps {
  correctAnswer: boolean
  onChange: (e: any) => void
}

export default function CreateAnswer(props: CreateAnswerProps) {
  const [answer, setAnswer] = useState('')
  const correctAnswer = props.correctAnswer ? styles.correct : styles.wrong

  function handleChange(e: any) {
    setAnswer(e)
    props.onChange(e)
  }

  return (
    <div className={`${styles.answers} ${correctAnswer}`}>
      <span style={{ fontSize: '1rem' }}>{`${
        props.correctAnswer ? 'Resposta Correta:' : 'Resposta incorreta:'
      }`}</span>
      <input
        type="text"
        value={answer}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
