import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromActions from "../actions/product.actions";
import { ProductState } from "./app.states";
import { createFeatureReducer } from "@ngrx/store/src/utils";

export const initialState: ProductState = { products: [], message: ''};

export function reducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): ProductState {
  switch (action.type) {
    case fromActions.SHOW_ALL_SUCCESS: {
      return { products: action.payload, message: 'Success' };
    }
    case fromActions.CREATE_SUCCESS: {
      return { products: [action.payload], message: "Article Created." };
    }
    case fromActions.CREATE_FAILURE: {
      return {products: [], message: action.payload};
    }
    case fromActions.GET_BY_ID_SUCCESS: {
      console.log(action.payload);
      return {products: action.payload, message: 'Success'};
    }
    case fromActions.RESET: {
      return { products: [], message: ''};
    }
    default: {
      return state;
    }
  }

}

export const getProductState = createFeatureSelector<ProductState>('productState');

export const getProducts = createSelector(getProductState, (state: ProductState) => state.products);

export const getMessage = createSelector(
  getProductState,
  (state: ProductState) => state.message
);