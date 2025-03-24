import styles from '@/styles/answer.module.css'
import AnswerModel from '@/pages/model/answer'
import QuestionModel from '@/pages/model/question'

interface AnswerProps {
  index: number
  value: string
  letter: string
  color: string
  question: QuestionModel
  currentAnswer: AnswerModel
  onSelectAnswer: (index: number) => void
}

export default function Answer(props: AnswerProps) {
  const color = props.color
  const correctAnswer = props.currentAnswer.correctAnswer
  const reveled = props.currentAnswer.reveled
  const faceUpClass = props.question.answered
    ? styles.face_up_unselect
    : styles.face_up

  return (
    <div className={styles.content}>
      {!reveled ? (
        <div
          className={`${faceUpClass}`}
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
