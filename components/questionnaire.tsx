import QuestionModel from '@/pages/model/question'
import Question from './question'
import Button from './button'
import styles from '@/styles/questionnaire.module.css'

interface QuestionnaireProps {
  question: QuestionModel
  lastQuestion: boolean
  answeredQuestion: (question: QuestionModel) => void
  nextStep: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {
  function answered(index: number) {
    if (!props.question.answered) {
      props.answeredQuestion(props.question.answerWith(index))
    }
  }

  return (
    <div className={styles.questionnaire}>
      {props.question && (
        <Question
          value={props.question}
          onSelectAnswer={answered}
          onCompleteTimer={props.nextStep}
        />
      )}
      <Button
        href=""
        text={props.lastQuestion ? 'Resultado' : 'Próxima'}
        onclick={props.nextStep}
      />
    </div>
  )
}
