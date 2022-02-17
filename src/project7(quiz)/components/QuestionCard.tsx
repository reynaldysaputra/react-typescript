import React, { FC } from 'react';

type Props = {
  question: string;
  answer: string[];
  callback: any;
  answerUser: string;
  questionNumber: number;
  totalQuestion: number;
}

const QuestionCard: FC<Props> = ({question, answer, callback, answerUser, questionNumber, totalQuestion}) => {
  return(
    <div>
      <h1>Question Card</h1>
    </div>
  )
}

export default QuestionCard;