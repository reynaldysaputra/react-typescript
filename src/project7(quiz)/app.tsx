import React, { FormEvent, useState } from 'react';
import { fetchQuizQuestions, QuestionsState } from './API';
import QuestionCard from './components/QuestionCard';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function AppQuiz(){
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  fetchQuizQuestions(TOTAL_QUESTIONS, 'easy');

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
      {/* <QuestionCard
          questionNumber={number + 1}
          totalQuestion={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
      /> */}
      <button className='next'>
        Next Question
      </button>
    </div>
  )
}

export default AppQuiz;