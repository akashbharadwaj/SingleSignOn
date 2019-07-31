import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    App1Component,
    App2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
