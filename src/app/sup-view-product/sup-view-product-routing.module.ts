import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupViewProductComponent } from './sup-view-product.component';

const routes: Routes = [
  { path: '', component: SupViewProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupViewProductRoutingModule {}
