import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { AppRoutingModule } from './app-routing-module';
import { ListarEmpresaComponent } from './pages/listar-empresa/listar-empresa.component';

import { CadastroModule } from './cadastro/cadastro.module';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
