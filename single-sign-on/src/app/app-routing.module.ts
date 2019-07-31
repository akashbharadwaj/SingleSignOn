import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'app1', component: App1Component},
  {path: 'app2', component: App2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
