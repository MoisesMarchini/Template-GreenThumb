import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
