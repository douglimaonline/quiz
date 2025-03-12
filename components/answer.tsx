import styles from '@/styles/answer.module.css'

interface AnswerProps {
  index: number
  value: string
  letter: string
  color: string
}

export default function Answer(props: AnswerProps) {
  return (
    <div className={styles.answer}>
      <span>{props.letter}</span>
      <span>{props.value}</span>
    </div>
  )
}
