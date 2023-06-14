import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomwComponent } from './homw.component';

const routes: Routes = [{ path: '', component: HomwComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomwRoutingModule { }
