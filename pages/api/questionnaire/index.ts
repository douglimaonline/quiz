import type { NextApiRequest, NextApiResponse } from 'next'
import questions from '../questionsBank'
import shuffle from '@/utils/helper'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[]>
) {
  const questionsId = shuffle(questions.map((q) => q.id))
  res.status(200).json(questionsId)
}
