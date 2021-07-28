import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1NavComponent } from './dashboard1-nav/dashboard1-nav.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

const routes: Routes = [
  { path: 'dashboard1', component: Dashboard1Component,
    children: [
      { path: 'dashboard1-nav', component: Dashboard1NavComponent}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashBoard1RoutingModule {}
