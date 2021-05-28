/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Select from 'react-select'
import Router from 'next/router'
import { Wrapper } from '../styles/pages'
import { Difficulty, Category, Type } from '../utils/seed'

const getObj = Enum => {
  const options: any = []
  for (const [key, value] of Object.entries(Enum)) {
    if (isNaN(Number(key))) {
      options.push({ label: key, value })
    }
  }
  return options
}

export default function Home() {
  const [numOfQuestions, setNumOfQuestions] = useState(10)
  const [difficulty, setDifficulty] = useState<any>(Difficulty.EASY)
  const [category, setCategory] = useState<any>(Category.AnyCategory)
  const [type, setType] = useState<any>(Type.Multiple)

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

    const queryObj1 = Object.fromEntries(
      Object.entries(queryObj).filter(([_, v]) => v != null),
    )

    Router.push({
      pathname: '/quiz',
      query: {
        ...queryObj1,
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
        />
        <Select
          value={difficulty}
          onChange={e => handleSelectChange(e, 'difficulty')}
          name="difficulty"
          placeholder="Difficulty"
          options={getObj(Difficulty)}
        />
        <Select
          value={category}
          name="category"
          placeholder="Category"
          options={getObj(Category)}
          onChange={e => handleSelectChange(e, 'category')}
        />
        <Select
          value={type}
          name="type"
          placeholder="Type"
          options={getObj(Type)}
          onChange={e => handleSelectChange(e, 'type')}
        />
        <button onClick={handleStartTrivia}>Start Trivia</button>
      </div>
    </Wrapper>
  )
}
