import { API } from '../utils/API'
import { Difficulty, Category, QuestionType } from '../interfaces'

const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  category: Category,
  type: QuestionType,
) => {
  return API.get(
    `?amount=${amount}&difficulty=${difficulty}&category=${category}&type=${type}`,
  )
}

export { fetchQuizQuestions }
