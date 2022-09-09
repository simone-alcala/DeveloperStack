import { Answer } from '@prisma/client';

export type CreateAnswerData = Omit<Answer, 'id'>;

export type ReqBodyAnswerData = Omit<Answer, 'id' | 'questionId'>;