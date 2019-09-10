import { Routes } from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './app/sections/section-orders/section-orders.component';
import { SectionHealtComponent } from './app/sections/section-healt/section-healt.component';


export const appRoutes: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'orders', component: SectionOrdersComponent },
  { path: 'health', component: SectionHealtComponent },

  {path: '', redirectTo: '/sales', pathMatch: 'full'}
];
