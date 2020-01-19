import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbsoluteValueSumMinimizationComponent } from './solutions/absolute-value-sum-minimization/absolute-value-sum-minimization.component';
import { AdjacentElementProductComponent } from './solutions/adjacent-element-product/adjacent-element-product.component';
import { AddComponent } from './solutions/add/add.component';
import { AddWallBorderComponent } from './solutions/add-wall-border/add-wall-border.component';
import { AddTwoDigitsComponent } from './solutions/add-two-digits/add-two-digits.component';

@NgModule({
  declarations: [
    AppComponent,
    AbsoluteValueSumMinimizationComponent,
    AdjacentElementProductComponent,
    AddComponent,
    AddWallBorderComponent,
    AddTwoDigitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
