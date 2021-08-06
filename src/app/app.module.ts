import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Dashboard1 } from './dashboard1/dashboard1.module';
import { ErrorHandlerService } from './services/error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    Dashboard1,
  ],
  providers: [ErrorHandlerService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly router: Router) {
    router.events.subscribe(console.log);
  }
}
