import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { AppRoutingModule } from './app-routing-module';
import { ListarEmpresaComponent } from './pages/listar-empresa/listar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroEmpresaComponent,
    ListarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
