import type { NextApiRequest, NextApiResponse } from 'next'
import questions from '../questionsBank'
import { Question } from '@/pages/model/question'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question | string>
) {
  const id = Number(req.query.id)
  const question = questions.find((q) => q.id === id)?.toObject()
  return question
    ? res.status(200).json(question)
    : res.status(204).send('204 No Content')
}
