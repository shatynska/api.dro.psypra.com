import { GetDimensionMainHandler } from './get-dimension-main/get-dimension-main.handler';
import { GetHomeDimensionHandler } from './get-home-dimension/get-home-dimension.handler';
import { GetHomeQuestionsHandler } from './get-home-questions/get-home-questions.handler';
import { GetSpecialistAdditionalHandler } from './get-specialist-additional/get-specialist-additional.handler';
import { GetSpecialistMainHandler } from './get-specialist-main/get-specialist-main.handler';

export const QUERIES = [
  GetHomeQuestionsHandler,
  GetHomeDimensionHandler,
  GetDimensionMainHandler,
  GetSpecialistMainHandler,
  GetSpecialistAdditionalHandler,
];
