import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { UserService } from './user.service';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { RouterModule, Routes } from '@angular/router';
import { Globals } from './global';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    App1Component,
    App2Component,
    RegisterComponent,
    DashboardComponent,
    Dashboard2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyserviceService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
