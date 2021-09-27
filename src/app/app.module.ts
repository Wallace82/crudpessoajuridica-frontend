import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor';

import { CadastroModule } from './pages/cadastro.module';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CadastroModule,
    AppRoutingModule,
  ],
  providers: [
    ErrorInterceptorProvider,
    ConfirmationService,
     MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
