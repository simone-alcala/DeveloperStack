import { CreateQuestionData } from './../types/questionTypes';
import * as repository from './../repositories/questionRepository';

export async function createQuestion(data: CreateQuestionData) {
  await repository.insert(data);
}

export async function get() {
  const result =  await repository.get();
  return { questions: result };
}

export async function getById(id: number) {
  const questionsWithAnswers = await repository.getById(id);
  return { 
    ...questionsWithAnswers, 
    answers: questionsWithAnswers?.answers.map( answer => {
    return { 
      answeredBy: answer.answeredBy,
      answer: answer.answer
    }})
  }
}