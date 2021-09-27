import { Component, OnInit } from '@angular/core';
import { Paginacao } from 'src/app/models/Paginacao';
import { PessoaJuridica } from 'src/app/models/PessoaJuridica';
import { PessoaJuridicaFilter } from 'src/app/models/PessoaJuridicaFilter';
import { TipoEmpresa } from 'src/app/models/TipoEmpresa';
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
  first = 1;
  rows = 5;

  totalRecords = 7

  ngOnInit(): void {

    

    this.tipoEmpresas = [
      { label: 'MATRIZ', value: '0' },
      { label: 'FILIAL', value: '1' },
    ];
    this.empresaFiltro.setValores('','','MATRIZ',0,5);
    console.log(this.empresaFiltro);
     this.empresaService
     .listarFiltroEmpresa(this.empresaFiltro)
     .subscribe(  retorno =>  {
      

       this.paginacao  = retorno

       console.log(this.paginacao.size);
       console.log(this.paginacao.totalPages);

       console.log(this.paginacao.totalElements);

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
