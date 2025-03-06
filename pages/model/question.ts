import shuffle from '@/utils/helper'
import AnswerModel, { Answer } from './answer'

export default class QuestionModel {
  #id: number
  #statement: string
  #answers: AnswerModel[]
  #answeredCorrectly: boolean | undefined

  constructor(
    id: number,
    statment: string,
    answers: AnswerModel[],
    answeredCorrectly?: false
  ) {
    this.#id = id
    this.#statement = statment
    this.#answers = answers
    this.#answeredCorrectly = answeredCorrectly
  }

  get id() {
    return this.#id
  }
  get statement() {
    return this.#statement
  }
  get answers() {
    return this.#answers
  }
  get answeredCorrectly() {
    return this.#answeredCorrectly
  }
  get answered() {
    return this.#answers.reduce((acc, a) => acc || a.reveled, false)
  }

  shuffleAnswers() {
    const shuffledAnswers = shuffle(this.#answers)
    return new QuestionModel(this.#id, this.#statement, shuffledAnswers)
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answers: this.#answers.map((a) => a.toObject()),
      answeredCorrectly: this.#answeredCorrectly,
    }
  }
}

export type Question = {
  id: number
  statement: string
  answers: Answer[]
  answeredCorrectly: boolean | undefined
}
