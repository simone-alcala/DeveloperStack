import Joi from 'joi';
import { CreateQuestionData } from '../types/questionTypes';

export const questionSchema = Joi.object<CreateQuestionData>({
  askedBy: Joi.string().required(),
  question: Joi.string().required()
});
