import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ListCadastroComponent } from './cadasrto/list-cadastro/list-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCadastroComponent,
    ListCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
