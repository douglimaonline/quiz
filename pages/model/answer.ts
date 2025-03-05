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
}
