// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FoodStatus = {
  "AVAILABLE": "AVAILABLE",
  "SOLD_OUT": "SOLD_OUT"
};

const { Todo, Food } = initSchema(schema);

export {
  Todo,
  Food,
  FoodStatus
};