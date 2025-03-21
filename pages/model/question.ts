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
    answeredCorrectly?: boolean
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

  answerWith(index: number): QuestionModel {
    const correctAnswer = this.#answers[index]?.correctAnswer
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = i === index
      const shouldReview = selectedAnswer || answer.correctAnswer
      return shouldReview ? answer.reviewAnswer() : answer
    })
    return new QuestionModel(this.#id, this.#statement, answers, correctAnswer)
  }

  shuffleAnswers(): QuestionModel {
    const shuffledAnswers = shuffle(this.#answers)
    return new QuestionModel(this.#id, this.#statement, shuffledAnswers)
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answers: this.#answers.map((a) => a.toObject()),
      answered: this.answered,
      answeredCorrectly: this.#answeredCorrectly,
    }
  }

  static questionFromJson(obj: Question): QuestionModel {
    const answers = obj.answers.map((a) => AnswerModel.answerFromJson(a))
    return new QuestionModel(
      obj.id,
      obj.statement,
      answers,
      obj.answeredCorrectly
    )
  }
}

export type Question = {
  id: number
  statement: string
  answers: Answer[]
  answered: boolean
  answeredCorrectly: boolean | undefined
}
