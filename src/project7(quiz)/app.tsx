import React, { FormEvent } from 'react';
import QuestionCard from './components/QuestionCard';

function AppQuiz(){

  const startTrivia = async () => {

  }

  const checkAnswer = (e: FormEvent<HTMLInputElement>) => {

  }

  const nextQuestion = () => {

  }

  return(
    <div className='app-quiz'>
      <h1>REACT QUIZ</h1>
      <button className='start-quiz' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score: </p>
      <p>Loading Question....</p>
      <QuestionCard/>
      <button className='next'>
        Next Question
      </button>
    </div>
  )
}