/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { QuestionCard } from '../../components'
import { fetchQuizQuestions } from '../../services'
import { Difficulty, Question, QuestionState } from '../../services/quiz'
import { shuffleArray } from '../../utils/shuffleArray'

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const TOTAL_QUESTIONS = 10

  const startTrivia = async () => {}

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}

  const { data } = useQuery(
    'fetchQuizQuestions',
    () => fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY),
    {
      refetchOnWindowFocus: false,
    },
  )

  const test = data?.data.results?.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }))

  return (
    <div>
      <h1>Quiz App</h1>
      <button className="start" onClick={startTrivia}></button>
      <p className="score">Score:</p>
      <p>Loading Questions:</p>
      <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number]?.question}
        answers={questions[number]?.answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  )
}

export default HomePage
