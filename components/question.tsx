import QuestionModel from '@/pages/model/question'
import styles from '@/styles/question.module.css'
import Title from './title'

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value

  return (
    <div className={styles.question}>
      <Title text={question.statement} />
    </div>
  )
}
