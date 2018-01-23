import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
