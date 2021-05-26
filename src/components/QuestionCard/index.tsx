import React, { FC } from 'react'

interface IProps {
  question: string
  answers: string[]
  callback: any
  userAnswer: any
  questionNum: number
  totalQuestions: number
}

const QuestionCard: FC<IProps> = ({
  question,
  answers,
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
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export { QuestionCard }
