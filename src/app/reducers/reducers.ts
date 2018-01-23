import { ActionReducerMap, ActionReducer, MetaReducer } from "@ngrx/store";
import { AppState } from "./app.states";
import * as fromReducer from './product.reducer';
import { environment } from "../../environments/environment";

export const reducers: ActionReducerMap<AppState> = {
    productState: fromReducer.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    
}
