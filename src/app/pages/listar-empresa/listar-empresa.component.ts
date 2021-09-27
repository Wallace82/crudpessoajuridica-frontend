import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent, MessageService, PrimeNGConfig } from 'primeng/api';

import { Paginacao } from 'src/app/models/Paginacao';
import { PessoaJuridica } from 'src/app/models/PessoaJuridica';
import { PessoaJuridicaFilter } from 'src/app/models/PessoaJuridicaFilter';
import { TipoEmpresaDTO } from 'src/app/models/TipoEmpresaDTO';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  providers: [ConfirmationService,MessageService]
})
export class ListarEmpresaComponent implements OnInit {
 
  @Input() empresaFiltro: PessoaJuridicaFilter = new PessoaJuridicaFilter();
  isLoading = false;
  loading: boolean = false;
  paginacao : Paginacao = new Paginacao();
  tipoEmpresas: TipoEmpresaDTO[] = [];
  empresas: PessoaJuridica[] = [];
  totalRecords: number = 0;
  empresaFiltroForm!: FormGroup;
  first = 0;

  constructor( 
    private empresaService: EmpresaService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
    ){
      this.createForm();
  }

  ngOnInit(): void {
  this.loading = true;
    this.tipoEmpresas = [
      { label: 'MATRIZ', value: '0' },
      { label: 'FILIAL', value: '1' },
    ];
    this.getEmpresas();
    this.primengConfig.ripple = true;
  }

  loadEmpresas(event: LazyLoadEvent) {
    this.loading = true;
      this.empresaFiltro.setValores(
        this.empresaFiltroForm.get('cnpj')?.value,
        this.empresaFiltroForm.get('nomeEmpresa')?.value,
        this.empresaFiltroForm.get('tipoEmpresa')?.value,
        (event.first==null?0:event.first/5),
        event.rows
      );
      
        setTimeout(() => {
        this.empresaService.listarFiltroEmpresa(this.empresaFiltro).subscribe(retorno =>  {
          
          this.paginacao  = retorno
            this.empresas = this.paginacao.content;
            this.totalRecords = this.paginacao.totalElements;
            this.loading = false;
        }
     )
    }, 1000);
  }

  pesquisar() {
    this.isLoading = !this.isLoading;
    this.empresaFiltro.setValores(
    this.empresaFiltroForm.get('cnpj')?.value,
    this.empresaFiltroForm.get('nomeEmpresa')?.value,
    this.empresaFiltroForm.get('tipoEmpresa')?.value,
    0,
    5
  );
  
  this.getEmpresas();
}

 getEmpresas() {
    this.empresaService
    .listarFiltroEmpresa(this.empresaFiltro)
        .subscribe(  retorno =>  {
          this.paginacao  = retorno
          this.empresas = this.paginacao.content;
          this.totalRecords = this.paginacao.totalElements;
          this.loading = false;
            this.isLoading =false;
        }
     );
  }

  createForm() {
    this.empresaFiltroForm = new FormGroup({
      cnpj: new FormControl(this.empresaFiltro.cnpj),
      nomeEmpresa: new FormControl(this.empresaFiltro.nomeEmpresa),
      tipoEmpresa: new FormControl(this.empresaFiltro.tipoEmpresa),
    })
  }
 
update(id: string) {
    this.router.navigate(['/editar/', id]);
  }

  delete(id: string) {
    
    this.confirmationService.confirm({
      message: 'Deletar empresa?',
      header: 'Deletar',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel:'Não',
      acceptLabel:'Sim, deletar',
      accept: () => {
          this.empresaService.deleteEmpresa(id).subscribe(response => {
          
            this.messageService.add({severity:'success', summary:'Success', detail:'Deletado'});
            this.getEmpresas();
          }, error => {
            this.messageService.add({severity:'success', summary:'Success', detail:'Deletado'});
          })
      },
      reject: () => {
          
      }
  });
  }

  OnPageChange(){
    console.log("alterou pagina");
  }


}
