import Question from '@/components/question'
import QuestionModel from './model/question'

export default function Home() {
  const questionTest = new QuestionModel(1, 'Perguntita', [])

  return <Question value={questionTest} />
}
