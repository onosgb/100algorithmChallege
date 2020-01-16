import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbsoluteValueSumMinimizationComponent } from './solutions/absolute-value-sum-minimization/absolute-value-sum-minimization.component';
import { AdjacentElementProductComponent } from './solutions/adjacent-element-product/adjacent-element-product.component';
import { AddComponent } from './solutions/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    AbsoluteValueSumMinimizationComponent,
    AdjacentElementProductComponent,
    AddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
