export default class AnswerModel {
  #value: string
  #correctAnswer: boolean
  #reveled: boolean

  constructor(value: string, correctAnswer: boolean, reveled = false) {
    this.#value = value
    this.#correctAnswer = correctAnswer
    this.#reveled = reveled
  }

  get value() {
    return this.#value
  }
  get correctAnswer() {
    return this.#correctAnswer
  }
  get reveled() {
    return this.#reveled
  }
  static rightAnswer(answer: string) {
    return new AnswerModel(answer, true)
  }
  static wrongAnswer(answer: string) {
    return new AnswerModel(answer, false)
  }

  reviewAnswer() {
    return new AnswerModel(this.#value, this.#correctAnswer, true)
  }

  static answerFromJson(obj: Answer): AnswerModel {
    return new AnswerModel(obj.value, obj.correctAnswer, obj.reveled)
  }

  toObject() {
    return {
      value: this.#value,
      correctAnswer: this.correctAnswer,
      reveled: this.#reveled,
    }
  }
}

export type Answer = {
  value: string
  correctAnswer: boolean
  reveled: boolean
}
