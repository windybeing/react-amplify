import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum FoodStatus {
  AVAILABLE = "AVAILABLE",
  SOLD_OUT = "SOLD_OUT"
}



export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

export declare class Food {
  readonly id: string;
  readonly name: string;
  readonly status: FoodStatus | keyof typeof FoodStatus;
  readonly price?: number;
  readonly description?: string;
  constructor(init: ModelInit<Food>);
  static copyOf(source: Food, mutator: (draft: MutableModel<Food>) => MutableModel<Food> | void): Food;
}