import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { ListarEmpresaComponent } from './pages/listar-empresa/listar-empresa.component';

const routes: Routes = [
  { path: '', component: ListarEmpresaComponent},
  { path: 'cadastrar', component: CadastroEmpresaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
