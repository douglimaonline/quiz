import styles from '@/styles/answer.module.css'
import AnswerModel from '@/model/answer'

interface AnswerProps {
  index: number
  value: string
  letter: string
  color: string
  currentAnswer: AnswerModel
  onSelectAnswer: (index: number) => void
}

export default function Answer(props: AnswerProps) {
  const color = props.color
  const correctAnswer = props.currentAnswer.correctAnswer
  const reveledAnswer = props.currentAnswer.reveled ? styles.reveledAnswer : ''

  return (
    <div className={styles.answer_box}>
      <div className={`${reveledAnswer} ${styles.content}`}>
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
      </div>
    </div>
  )
}
