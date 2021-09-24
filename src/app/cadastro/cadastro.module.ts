import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ListCadastroComponent } from './list-cadastro/list-cadastro.component';

@NgModule({
    declarations: [ 
        FormCadastroComponent,
        ListCadastroComponent
    ],
    exports: [ 
        FormCadastroComponent,
        ListCadastroComponent
     ],
    imports: [ 
        HttpClientModule,
        CommonModule 
    ]
})
export class CadastroModule{

}