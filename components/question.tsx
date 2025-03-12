import QuestionModel from '@/pages/model/question'
import styles from '@/styles/question.module.css'
import Title from './title'
import Answer from './answer'

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value

  return (
    <div className={styles.question}>
      <Title text={question.statement} />
      {question.answers.map((a, i) => {
        return (
          <Answer
            key={i}
            index={i}
            value={a.value}
            letter="A"
            color="#F2C866"
          />
        )
      })}
    </div>
  )
}
