import Joi from 'joi';
 import { ReqBodyAnswerData } from '../types/answerTypes';

export const answerSchema = Joi.object<ReqBodyAnswerData>({
  answeredBy: Joi.string().required(),
  answer: Joi.string().required()
});
