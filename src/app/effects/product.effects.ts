import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import { of } from "rxjs/observable/of";
import * as fromActions from "../actions/product.actions";
import { ProductService } from "../services/product.service";

@Injectable()
export class ProductEffects {

    constructor(
            private actions$: Actions,
            private productService: ProductService
    ) {}

    @Effect()
    loadAllProducts$: Observable<Action> = this.actions$
        .ofType(fromActions.SHOW_ALL)
        .switchMap(() =>
        this.productService.getAllProducts()
        .map(data => new fromActions.ShowAllSuccessAction(data))
    );

    @Effect()
    searchProductById$: Observable<Action> = this.actions$
        .ofType<fromActions.GetByIdAction>(fromActions.GET_BY_ID)
        .debounceTime(500)
        .map(action => action.payload)
        .switchMap(id =>
            this.productService.getProductById(id)
            .map(res => new fromActions.GetByIdSuccessAction(res))
        );
}