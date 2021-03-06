import React, { useState } from 'react'
import Select from 'react-select'
import Router from 'next/router'
import { Wrapper } from '../styles/pages'
import { Difficulty, Category, QuestionType } from '../interfaces'
import { removeEmptyFromObj, getOptions } from '../services/utils'
import { Button } from '../components'

export default function Home() {
  const [numOfQuestions, setNumOfQuestions] = useState(5)
  const [difficulty, setDifficulty] = useState<any>(Difficulty.EASY)
  const [category, setCategory] = useState<any>(Category.AnyCategory)
  const [type, setType] = useState<any>(QuestionType.Multiple)

  const handleInputChange = e => {
    setNumOfQuestions(e.target.value)
  }

  const handleSelectChange = (e, type) => {
    switch (type) {
      case 'difficulty':
        setDifficulty(e)
        break
      case 'category':
        setCategory(e)
        break
      case 'type':
        setType(e)
        break
      default:
    }
  }

  const handleStartTrivia = () => {
    const queryObj = {
      num: numOfQuestions,
      difficulty: difficulty?.value,
      category: category?.value,
      type: type?.value,
    }

    const obj: any = removeEmptyFromObj(queryObj)
    Router.push({
      pathname: '/quiz',
      query: {
        ...obj,
      },
    })
  }

  return (
    <Wrapper>
      <h1>Quiz App</h1>
      <div className="form-card">
        <input
          onChange={handleInputChange}
          value={numOfQuestions}
          type="number"
          max={50}
          min={5}
          placeholder="Number of questions"
          className="input-num"
        />
        <Select
          value={difficulty}
          onChange={e => handleSelectChange(e, 'difficulty')}
          name="difficulty"
          placeholder="Difficulty"
          options={getOptions(Difficulty)}
          className="select"
        />
        <Select
          value={category}
          name="category"
          placeholder="Category"
          options={getOptions(Category)}
          onChange={e => handleSelectChange(e, 'category')}
          className="select"
        />
        <Select
          value={type}
          name="type"
          placeholder="Type"
          options={getOptions(QuestionType)}
          onChange={e => handleSelectChange(e, 'type')}
          className="select"
        />
        <Button onClick={handleStartTrivia}>Start Trivia</Button>
      </div>
    </Wrapper>
  )
}
