import { Request, Response } from 'express';

import { CreateQuestionData } from './../types/questionTypes';
import * as questionService from './../services/questionService';

import { CreateAnswerData } from './../types/answerTypes';
import * as  answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } : CreateQuestionData = req.body;
  await questionService.createQuestion({ askedBy, question  });
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params;
  const { answeredBy, answer } : CreateAnswerData = req.body;
  await answerService.insert({ answeredBy, answer, questionId: Number(id) } );
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const result = await questionService.get();
  res.status(200).send(result);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const result = await questionService.getById(Number(id));
  res.status(200).send(result);
}
