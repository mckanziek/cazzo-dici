import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './container/home/home.component';
import {LoginComponent} from './container/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', redirectTo: 'login'},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
