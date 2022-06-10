import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { Exemple1Component } from './exemple1/exemple1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Exemple2Component } from './exemple2/exemple2.component';


@NgModule({
  declarations: [
    Exemple1Component,
    Exemple2Component
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StockModule { }
