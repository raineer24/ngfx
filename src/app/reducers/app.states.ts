import { Product } from "../models/product";

export interface AppState {
    productState: ProductState;
}
export interface ProductState {
    products: Product[];
    message: any;
}

