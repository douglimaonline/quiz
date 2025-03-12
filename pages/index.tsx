import Question from '@/components/question'
import QuestionModel from './model/question'
import style from '@/styles/home.module.css'
import AnswerModel from './model/answer'

export default function Home() {
  const questionTest = new QuestionModel(1, 'Question title', [
    AnswerModel.wrongAnswer('Answer A'),
    AnswerModel.wrongAnswer('Answer B'),
    AnswerModel.wrongAnswer('Answer C'),
    AnswerModel.rightAnswer('Answer D'),
  ])

  return (
    <div className={style.home}>
      <Question value={questionTest} />
    </div>
  )
}
