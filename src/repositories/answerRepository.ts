import { prisma } from './../config/database';

import { CreateAnswerData } from './../types/answerTypes';

export async function insert(data: CreateAnswerData) {
  return prisma.answer.create({ data });
}