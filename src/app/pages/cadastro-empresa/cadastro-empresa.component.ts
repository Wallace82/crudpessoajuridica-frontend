import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaJuridica } from 'src/app/models/PessoaJuridica';


@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html'
})
export class CadastroEmpresaComponent implements OnInit {

  pessoaJuridica: PessoaJuridica;

  constructor() {
    this.pessoaJuridica= new PessoaJuridica();
  }

  ngOnInit(): void {
  }
}
