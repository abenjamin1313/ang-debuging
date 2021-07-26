import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Dashboard1Component } from './dashboard1/dashboard1/dashboard1.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'dashboard1', component: Dashboard1Component,
    loadChildren: () => import('./dashboard1/dashboard1-routing.module').then(m => m.DashBoard1RoutingModule)
  },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
