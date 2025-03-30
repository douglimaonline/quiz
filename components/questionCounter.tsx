import styles from '@/styles/counter.module.css'

export interface QuestionCounterProps {
  totalQuestions: number
  currentQuestions: number
}

export default function QuestionCounter(props: QuestionCounterProps) {
  const totalQuestions = props.totalQuestions
  const currentQuestions = props.currentQuestions

  return (
    <div className={styles.questionCounter}>
      <span>{`${
        currentQuestions > 10
          ? currentQuestions
          : currentQuestions.toString().padStart(2, '0')
      }/${totalQuestions}`}</span>
    </div>
  )
}
