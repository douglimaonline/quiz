import Question from '@/components/question'
import QuestionModel from './model/question'
import style from '@/styles/home.module.css'

export default function Home() {
  const questionTest = new QuestionModel(1, 'Perguntita', [])

  return (
    <div className={style.home}>
      <Question value={questionTest} />
    </div>
  )
}
