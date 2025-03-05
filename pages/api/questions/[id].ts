import type { NextApiRequest, NextApiResponse } from 'next'
import questions from '../questionsBank'
import { Question } from '@/pages/model/question'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question[]>
) {
  res.status(200).json(questions.map((q) => q.toObject()))
}
