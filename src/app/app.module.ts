import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';
import { ProductService } from "./services/product.service";
import { reducers, metaReducers } from "./reducers/reducers";
import { ProductComponent } from './components/product/product.component';
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./effects/product.effects";
@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
