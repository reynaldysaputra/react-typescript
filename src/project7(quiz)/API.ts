import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  answers: string[];
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question;

export const fetchQuizQuestions = async (
  amount: number, 
  difficulty: string
): Promise<QuestionsState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer]) //shuffleArray adalah fungsi acak answer
  }))
};