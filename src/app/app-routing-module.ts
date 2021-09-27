import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { EditarEmpresaComponent } from './pages/editar-empresa/editar-empresa.component';
import { ListarEmpresaComponent } from './pages/listar-empresa/listar-empresa.component';
import { ResolverEmpresa } from './resolves/ResolverEmpresa';

const routes: Routes = [
  { path: '', component: ListarEmpresaComponent },
  { path: 'cadastrar', component: CadastroEmpresaComponent },
  {
    path: 'editar/:id', component: EditarEmpresaComponent, resolve: {
      data: ResolverEmpresa,

    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
