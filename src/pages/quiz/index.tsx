import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { QuestionCard, Loader, Button } from '../../components'
import { fetchQuizQuestions } from '../../services'
import {
  Question,
  QuestionState,
  AnswerObject,
  Difficulty,
  QuestionType,
  Category,
} from '../../interfaces'
import { shuffleArray } from '../../utils'
import { Wrapper } from '../../styles/pages/quiz'

const QuizPage = ({ difficulty, num, type, category }) => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const TOTAL_QUESTIONS = num

  const { data, refetch } = useQuery(
    'fetchQuizQuestions',
    () => fetchQuizQuestions(num, difficulty, category, type),
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
    await refetch()
  }

  const handleBackBtnClick = () => {
    Router.push('/')
  }

  const handleStartAgain = () => {
    refetch()
  }

  useEffect(() => {
    startTrivia()
  }, [difficulty, num, type, category])

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

  const handleNextBtnClick = () => {
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
      {!loading && !gameOver && <p className="score">Score: {score}</p>}
      {loading && (
        <div className="loader-wrapper">
          <Loader />
          <p>Loading Questions...</p>
        </div>
      )}
      {!loading && !gameOver && userAnswers.length != TOTAL_QUESTIONS && (
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
          <Button className="next" onClick={handleNextBtnClick}>
            Next
          </Button>
        )}
      {(gameOver || userAnswers.length == TOTAL_QUESTIONS) && (
        <>
          <Button onClick={handleBackBtnClick} className="next">
            Back
          </Button>
          <Button onClick={handleStartAgain} className="next">
            Try Again
          </Button>
        </>
      )}
    </Wrapper>
  )
}

export default QuizPage

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      difficulty: context.query?.difficulty || Difficulty.EASY,
      type: context.query?.type || QuestionType.Multiple,
      num: context.query?.num || '5',
      category: context.query?.category || Category.AnyCategory,
    },
  }
}
