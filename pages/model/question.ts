export default class QuestionModel {
  #id: number
  #statement: string
  #answers: string[]
  #answeredCorrectly: boolean

  constructor(
    id: number,
    statment: string,
    answers: string[],
    answeredCorrectly: false
  ) {
    this.#id = id
    this.#statement = statment
    this.#answers = answers
    this.#answeredCorrectly = answeredCorrectly
  }

  get id() {
    return this.#id
  }
  get statment() {
    return this.#statement
  }
  get answers() {
    return this.#answers
  }
  get answeredCorrectly() {
    return this.#answeredCorrectly
  }
}
