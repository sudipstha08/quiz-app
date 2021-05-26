import React, { FC } from 'react'

interface IProps {
  question: string
  answer: string[]
  callback: any
  userAnswer: string
  questionNum: number
  totalQuestions: number
}

const QuestionCard: FC<IProps> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p>
    </div>
  )
}

export { QuestionCard }
