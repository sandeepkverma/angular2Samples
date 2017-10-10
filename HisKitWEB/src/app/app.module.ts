import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/accounts.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './account/create.account.component';
import { AccountDetailsComponent } from './account/accountdetails.component';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    AccountComponent,
    LoginComponent,
    CreateAccountComponent,
    AccountDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
