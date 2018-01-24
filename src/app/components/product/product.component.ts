import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromReducer from "../../reducers/product.reducer";
import * as fromActions from "../../actions/product.actions";
import { ProductState } from "../../reducers/app.states";
import { Product } from "../../models/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html"
  
})
export class ProductComponent {
  product$: Observable<Product[]>;
  message$: Observable<any>;
  task= '';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ProductState>
  ) {
    this.product$ = store.select(fromReducer.getProducts);
    this.message$ = store.select(fromReducer.getMessage);
  }
  productForm = this.formBuilder.group({
    id: ["", Validators.required],
    title: "",
    category: ""
  });

  get id() {
    return this.productForm.get("id");
  }
  onFormSubmit() {
    if (this.productForm.valid) {
      let product = this.productForm.value;
      this.createProduct(product);
      this.productForm.reset();
    }
  }
  createProductView() {
    this.task = 'create';
    this.store.dispatch(new fromActions.ResetAction());
  }
  getProductByIdView() {
    this.task = "get";
    this.store.dispatch(new fromActions.ResetAction());
  }
  loadAllProducts() {
    this.task = "all";
    this.store.dispatch(new fromActions.ShowAllAction());
  }
  createProduct(product: Product) {
    this.store.dispatch(new fromActions.CreateAction(product));
  }
  searchProductById(productId: string) {
    this.store.dispatch(new fromActions.GetByIdAction(productId));
  }

  ngOnInit() {}
}
