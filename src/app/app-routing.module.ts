import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product.component';
import { ProductsComponent } from './products/products.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: 'home',
    component: DemoComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
