import { Action } from "@ngrx/store";
import { Product } from "../models/product";

export const SHOW_ALL = '[PRODUCT] Show All';
export const SHOW_ALL_SUCCESS = '[PRODUCT] Show All Success';
export const CREATE = '[PRODUCT] Create';
export const CREATE_SUCCESS = '[PRODUCT] Create Success';
export const CREATE_FAILURE = '[PRODUCT] Create Failure';
export const GET_BY_ID = '[PRODUCT] Get by Id';
export const GET_BY_ID_SUCCESS = "[PRODUCT] Get by Id Success";
export const RESET = '[PRODUCT] Reset';

export class ShowAllAction implements Action {
    readonly type = SHOW_ALL;
}
export class ShowAllSuccessAction implements Action {
  readonly type = SHOW_ALL_SUCCESS;
  constructor(public payload: Product[]) {}
}
export class CreateAction implements Action {
  readonly type = CREATE;
  constructor(public payload: Product) {}
}
export class CreateSuccessAction implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public payload: Product) {}
}
export class CreateFailureAction implements Action {
  readonly type = CREATE_FAILURE;
  constructor(public payload: any[]) {}
}
export class GetByIdAction implements Action {
  readonly type = GET_BY_ID;
  constructor(public payload: string) {}
}
export class GetByIdSuccessAction implements Action {
  readonly type = GET_BY_ID_SUCCESS;
  constructor(public payload: Product[]) {}
}
export class ResetAction implements Action {
  readonly type = RESET;
}

export type ALL_REDUCER_ACTIONS = ShowAllSuccessAction | CreateSuccessAction | CreateFailureAction | GetByIdSuccessAction | ResetAction