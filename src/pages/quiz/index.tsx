import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import Router from 'next/router'
import { QuestionCard } from '../../components'
import { fetchQuizQuestions } from '../../services'
import { Difficulty, Question, QuestionState } from '../../services/quiz'
import { shuffleArray } from '../../utils/shuffleArray'
import { Wrapper } from '../../styles/pages/quiz'

export type AnswerObject = {
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

  const { data, refetch } = useQuery(
    'fetchQuizQuestions',
    () => fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  )

  useEffect(() => {
    const questionsData = data?.data.results?.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }))
    setQuestions(questionsData)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }, [data])

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    Router.push('/quiz')
    await refetch()
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // user answer
      const answer = e.currentTarget.value
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer
      // Add score if answer is correct
      if (correct) setScore(prev => prev + 1)

      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    // Move to next question
    const nextQuestion = number + 1
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
      return
    }
    setNumber(nextQuestion)
  }

  return (
    <Wrapper>
      <h1>Quiz App</h1>
      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button className="start" onClick={startTrivia}>
          Start Trivia
        </button>
      )}
      {!gameOver && <p className="score">Score: {score}</p>}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number]?.question}
          answers={questions[number]?.answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 && (
          <button className="next" onClick={nextQuestion}>
            Next
          </button>
        )}
    </Wrapper>
  )
}

export default HomePage
