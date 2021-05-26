import React from 'react'
import { QuestionCard } from '../../components'
const HomePage = () => {
  const startTrivia = async () => {}
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}
  return (
    <div>
      <h1>Quiz App</h1>
      <button className="start" onClick={startTrivia}></button>
      <p className="score">Score:</p>
      <p>Loading Questions:</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}></button>
    </div>
  )
}

export default HomePage
