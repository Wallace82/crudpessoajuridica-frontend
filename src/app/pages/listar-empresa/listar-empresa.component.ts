import { Component, OnInit } from '@angular/core';
import { Paginacao } from 'src/app/models/Paginacao';
import { PessoaJuridica } from 'src/app/models/PessoaJuridica';
import { PessoaJuridicaFilter } from 'src/app/models/PessoaJuridicaFilter';
import { TipoEmpresaDTO } from 'src/app/models/TipoEmpresaDTO';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html'
})
export class ListarEmpresaComponent implements OnInit {
 
  isLoading = false;
  paginacao : Paginacao = new Paginacao();
  tipoEmpresas: TipoEmpresaDTO[] = [];
  empresas: PessoaJuridica[] = [];
  empresaFiltro: PessoaJuridicaFilter = new PessoaJuridicaFilter;
  first = 0;
  rows = 5;

  ngOnInit(): void {

    

    this.tipoEmpresas = [
      { label: 'MATRIZ', value: '0' },
      { label: 'FILIAL', value: '1' },
    ];

     this.empresaService
     .listarFiltroEmpresa(this.empresaFiltro)
     .subscribe(  retorno =>  {
       this.paginacao  = retorno
       this.empresas = this.paginacao.content;
      }
      );
  }

  constructor( 
    private empresaService: EmpresaService
    ){

  }

  pesquisar(event: any) {
  this.isLoading = !this.isLoading;

  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
  return this.empresas ? this.first === (this.empresas.length - this.rows): true;
}

isFirstPage(): boolean {
  return this.empresas ? this.first === 0 : true;
}

}
