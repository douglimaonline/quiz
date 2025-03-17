import QuestionModel from '@/pages/model/question'
import styles from '@/styles/question.module.css'
import Title from './title'
import Answer from './answer'

const letters = [
  { value: 'A', color: '#D5C7A3' },
  { value: 'B', color: '#f266bA' },
  { value: 'C', color: '#ADB2D4' },
  { value: 'D', color: '#7A73D1' },
]

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
            letter={letters[i].value}
            color={letters[i].color}
          />
        )
      })}
    </div>
  )
}
