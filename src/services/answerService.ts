import { CreateAnswerData } from '../types/answerTypes';
import * as repository from '../repositories/answerRepository';

export async function insert(data: CreateAnswerData) {
  return await repository.insert(data);
}