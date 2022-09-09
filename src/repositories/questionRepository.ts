import { prisma } from './../config/database';

import { CreateQuestionData } from './../types/questionTypes';

export async function insert(data: CreateQuestionData) {
  return prisma.question.create({ data });
}

export async function get() {
  return prisma.question.findMany();
}

export async function getById(id: number) {
  return prisma.question.findFirst({ 
    where: { id }, 
    include: { 
      answers : true
    } } );
}