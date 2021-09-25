import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
    declarations: [ 
        ListarEmpresaComponent,
        CadastroEmpresaComponent
    ],
    exports: [ 
     ],
    imports: [ 
    HttpClientModule,
        CommonModule,
        PrimengModule
    ]
})
export class CadastroModule{

}