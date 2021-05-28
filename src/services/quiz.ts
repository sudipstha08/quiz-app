import { API } from '../utils/API'
import { Category, Type } from '../utils/seed'

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

const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  category: Category,
  type: Type,
) => {
  return API.get(
    `?amount=${amount}&difficulty=${difficulty}&category=${category}&type=${type}`,
  )
}

export { fetchQuizQuestions }
