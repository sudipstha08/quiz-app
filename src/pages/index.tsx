import React from 'react'
import { Wrapper } from '../styles/pages'

export default function Home() {
  return (
    <Wrapper>
      <h1>Quiz App</h1>
      <div className="form-card">
        <button>Start Trivia</button>
      </div>
    </Wrapper>
  )
}
