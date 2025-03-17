import styles from '@/styles/answer.module.css'

interface AnswerProps {
  index: number
  value: string
  letter: string
  color: string
  onSelectAnswer: (index: number) => void
}

export default function Answer(props: AnswerProps) {
  const color = props.color

  return (
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
  )
}
