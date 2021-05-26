import { API } from '../utils/API'

export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type QuestionState = Question & { answers: string[] }

const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  return API.get(`?amount=${amount}&difficulty=${difficulty}`)
}

export { fetchQuizQuestions }
