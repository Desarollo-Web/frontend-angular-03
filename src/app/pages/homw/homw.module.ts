import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomwRoutingModule } from './homw-routing.module';
import { HomwComponent } from './homw.component';


@NgModule({
  declarations: [
    HomwComponent
  ],
  imports: [
    CommonModule,
    HomwRoutingModule
  ]
})
export class HomwModule { }
