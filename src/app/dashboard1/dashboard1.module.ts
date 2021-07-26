import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
// Services
import { ErrorHandlerService } from '../services/error-handler.service';
// Components
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard1NavComponent } from './dashboard1-nav/dashboard1-nav.component';

@NgModule({
  declarations: [
    Dashboard1Component,
    Dashboard1NavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [{provide: ErrorHandlerService, useClass: ErrorHandlerService}],
  bootstrap: []
})
export class Dashboard1 {}
