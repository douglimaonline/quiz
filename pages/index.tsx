import Questionnaire from '@/components/questionnaire'
import QuestionModel from './model/question'
import style from '@/styles/home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const rounter = useRouter()
  const [question, setQuestion] = useState<QuestionModel>()
  const [questionIds, setQuestionIds] = useState<number[]>([])
  const [timeToAnswer, setTimeToAnswer] = useState(10)
  const [score, setScore] = useState(0)

  async function getQuestionIds() {
    const resp = await fetch(`${BASE_URL}/questionnaire`)
    const data = await resp.json()
    setQuestionIds(data)
  }

  async function getQuestionById(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const data = await resp.json()
    const question = QuestionModel.questionFromJson(data)
    setQuestion(question)
  }

  useEffect(() => {
    getQuestionIds()
  }, [])

  useEffect(() => {
    questionIds.length && getQuestionById(questionIds[0])
  }, [questionIds])

  function selectedAnswer(question: QuestionModel) {
    setTimeToAnswer(0)
    setQuestion(question)
    setScore(score + (question.answeredCorrectly ? 1 : 0))
  }

  function getNextQuestionId() {
    if (question) {
      const nextId = questionIds.indexOf(question.id) + 1
      return questionIds[nextId]
    }
  }

  function nextStep() {
    setTimeToAnswer(10)
    const nextQuestionId = getNextQuestionId()
    nextQuestionId ? nextQuestion(nextQuestionId) : finish()
  }

  function nextQuestion(nextId: number) {
    getQuestionById(nextId)
  }

  function finish() {
    rounter.push({
      pathname: '/result',
      query: {
        count: questionIds.length,
        score: score,
      },
    })
  }

  return (
    <div className={style.home}>
      <Questionnaire
        question={question}
        lastQuestion={getNextQuestionId() === undefined}
        answeredQuestion={selectedAnswer}
        nextStep={nextStep}
        timeToAnswer={timeToAnswer}
      />
    </div>
  )
}
