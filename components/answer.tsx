import styles from '@/styles/answer.module.css'
import AnswerModel from '@/pages/model/answer'

interface AnswerProps {
  index: number
  value: string
  letter: string
  color: string
  answer: AnswerModel
  onSelectAnswer: (index: number) => void
}

export default function Answer(props: AnswerProps) {
  const color = props.color
  const correctAnswer = props.answer.correctAnswer
  const reveled = props.answer.reveled

  return (
    <div className={styles.content}>
      {!reveled ? (
        <div
          className={styles.face_up}
          onClick={() => props.onSelectAnswer(props.index)}
        >
          <div className={styles.answer}>
            <div className={styles.letter} style={{ backgroundColor: color }}>
              <span>{props.letter}</span>
            </div>
            <div className={styles.value}>
              <span>{props.value}</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.face_down} ${
            correctAnswer ? styles.correct : styles.wrong
          }`}
        >
          <div className={styles.value}>
            <span style={{ fontSize: '1rem' }}>{`${
              correctAnswer ? 'Resposta Correta:' : 'Resposta incorreta:'
            }`}</span>
            <span>{props.value}</span>
          </div>
        </div>
      )}
    </div>
  )
}
