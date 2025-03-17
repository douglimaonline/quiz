import QuestionModel from '@/pages/model/question'
import styles from '@/styles/question.module.css'
import Title from './title'
import Answer from './answer'
import Timer from './timer'

const letters = [
  { value: 'A', color: '#FBA518' },
  { value: 'B', color: '#f266bA' },
  { value: 'C', color: '#48A6A7' },
  { value: 'D', color: '#5B913B' },
]

interface QuestionProps {
  value: QuestionModel
  onSelectAnswer: (index: number) => void
  onCompleteTimer: () => void
}

export default function Question(props: QuestionProps) {
  const question = props.value

  return (
    <div className={styles.question}>
      <Title text={question.statement} />
      <Timer onComplete={props.onCompleteTimer} />
      {question.answers.map((a, i) => {
        return (
          <Answer
            key={i}
            index={i}
            value={a.value}
            letter={letters[i].value}
            color={letters[i].color}
            answer={a}
            onSelectAnswer={props.onSelectAnswer}
          />
        )
      })}
    </div>
  )
}
