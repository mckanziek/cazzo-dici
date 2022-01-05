import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './container/home/home.component';
import { LoginComponent } from './container/login/login.component';
import { GraduatoryComponent } from './component/graduatory/graduatory.component';
import { PhraseListComponent } from './component/phrase-list/phrase-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GraduatoryComponent,
    PhraseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent,
    HomeComponent,
    PhraseListComponent
  ]
})
export class AppModule { }
