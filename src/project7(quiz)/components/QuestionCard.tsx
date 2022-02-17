import React, { FC } from 'react';
import { Wrapper } from '../../project5(shopping-cart)/App.styles';
import { ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestion: number;
}

const QuestionCard: FC<Props> = ({
  question,
  answers, 
  callback,
  userAnswer, 
  questionNumber,
  totalQuestion
}) => {
  return(
    <Wrapper>
      <p className='number'>
        Question: {questionNumber} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            {console.log(answer)}
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  )
}

export default QuestionCard;