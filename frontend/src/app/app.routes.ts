import { Routes } from '@angular/router';
import { Products } from './components/products/products';

export const routes: Routes = [
  { path: '', component: Products },          // Default route → Products page
  { path: '**', redirectTo: '' }              // Fallback → Products page
];
