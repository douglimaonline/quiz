import QuestionModel from '@/pages/model/question'
import styles from '@/styles/question.module.css'

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value

  return (
    <div className={styles.question}>
      <h1>{question.statement}</h1>
    </div>
  )
}
