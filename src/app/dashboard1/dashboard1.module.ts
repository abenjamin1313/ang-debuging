import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
// Services
import { ErrorHandlerService } from '../services/error-handler.service';
@NgModule({
  declarations: [

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
