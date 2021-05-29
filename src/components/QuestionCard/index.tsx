import React, { FC } from 'react'
import { QuestionCardProps } from '../../interfaces'
import { Button } from '../Button'
import { Wrapper, ButtonWrapper } from '../../styles/components/QuestionCard'

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers?.map(answer => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <Button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </Button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  )
}

export { QuestionCard }
