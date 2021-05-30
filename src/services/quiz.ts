import { API } from './utils'
import { Difficulty, Category, QuestionType } from '../interfaces'

const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  category: Category,
  type: QuestionType,
) => {
  let query = `?amount=${amount}&difficulty=${difficulty}&type=${type}`
  if (category) query = query + `&category=${category}`
  return API.get(query)
}

export { fetchQuizQuestions }
