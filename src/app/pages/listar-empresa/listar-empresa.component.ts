import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Paginacao } from 'src/app/models/Paginacao';
import { PessoaJuridica } from 'src/app/models/PessoaJuridica';
import { PessoaJuridicaFilter } from 'src/app/models/PessoaJuridicaFilter';
import { TipoEmpresaDTO } from 'src/app/models/TipoEmpresaDTO';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html', 
  providers: [ConfirmationService, MessageService]
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
    this.getEmpresas();
    this.primengConfig.ripple = true;
  }

  constructor( 
    private empresaService: EmpresaService,
  private router: Router,
  private confirmationService: ConfirmationService,
  private primengConfig: PrimeNGConfig,
  private messageService: MessageService
    ){

  }

  getEmpresas() {
    this.empresaFiltro.setValores('','','MATRIZ',0,5);
    this.empresaService
    .listarFiltroEmpresa(this.empresaFiltro)
    .subscribe(  retorno =>  {
      this.paginacao  = retorno
      this.empresas = this.paginacao.content;
     }
     );
  }

  update(id: string) {
    this.router.navigate(['/editar/', id]);
  }

  delete(id: string) {
    console.log('entrando')
    this.confirmationService.confirm({
      message: 'Deletar empresa?',
      header: 'Deletar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.empresaService.deleteEmpresa(id).subscribe(response => {
            this.messageService.add({severity:'success', summary:'Success', detail:'Deletado'});
            this.getEmpresas();
          }, error => {
            console.log(error)
            this.messageService.add({severity:'success', summary:'Success', detail:'Deletado'});
          })
      },
      reject: () => {
          
      }
  });
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
