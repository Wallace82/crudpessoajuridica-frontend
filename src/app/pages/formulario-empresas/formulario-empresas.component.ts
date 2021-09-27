import { Component, Input, OnInit } from '@angular/core';
import { TipoEmpresaDTO } from 'src/app/models/TipoEmpresaDTO';
import { PessoaJuridica } from 'src/app/models/PessoaJuridica';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Router } from '@angular/router';
import { CEPService } from 'src/app/services/cep.service';
import { TipoEmpresa } from 'src/app/models/TipoEmpresa';

@Component({
  selector: 'app-formulario-empresas',
  templateUrl: './formulario-empresas.component.html',
  styleUrls: ['./formulario-empresas.component.css']
})
export class FormularioEmpresasComponent implements OnInit {

  @Input() pessoaJuridica!: PessoaJuridica;

  tipoEmpresas: TipoEmpresaDTO[];

  tiposMatriz: PessoaJuridica[] = [];

  isLoading: boolean = false;

  empresaForm!: FormGroup;

  constructor(private cEPService: CEPService, private empresaService: EmpresaService, private router: Router) {
    this.tipoEmpresas = [
      { label: 'MATRIZ', value: '0' },
      { label: 'FILIAL', value: '1' },
    ];
  }


  ngOnInit(): void {
    this.createForm(this.pessoaJuridica)
  }



  createForm(pessoaJuridica: PessoaJuridica) {
    this.empresaForm = new FormGroup({
      id: new FormControl(pessoaJuridica.id),
      cnpj: new FormControl(pessoaJuridica.cnpj, [Validators.required]),
      contato: new FormControl(pessoaJuridica.contato, [Validators.required]),
      email: new FormControl(pessoaJuridica.email, [Validators.required, Validators.email, Validators.max(40)]),
      enderecoBairro: new FormControl(pessoaJuridica.enderecoBairro, [Validators.required, Validators.max(40)]),
      enderecoCep: new FormControl(pessoaJuridica.enderecoCep, [Validators.required]),
      enderecoComplemento: new FormControl(pessoaJuridica.enderecoComplemento, Validators.max(40)),
      enderecoLogradouro: new FormControl(pessoaJuridica.enderecoLogradouro, [Validators.required, Validators.max(40)]),
      enderecoLocalidade: new FormControl(pessoaJuridica.enderecoLocalidade, [Validators.required, Validators.max(40)]),
      enderecoUf: new FormControl(pessoaJuridica.enderecoUf, [Validators.required]),
      matrizId: new FormControl(pessoaJuridica.matrizId, [Validators.required]),
      nome: new FormControl(pessoaJuridica.nome, [Validators.required, Validators.max(50)] ),
      razaoSocial: new FormControl(pessoaJuridica.razaoSocial, [Validators.required, Validators.max(40)]),
      tipoEmpresa: new FormControl(pessoaJuridica.tipoEmpresa, [Validators.required]),
    })
  }


  onSubmit() {
    var tipoEmpresaDto = this.empresaForm.get('tipoEmpresa')?.value;
    var tipoEmpresa = TipoEmpresa.MATRIZ;
    var cep = this.empresaForm.get('enderecoCep')?.value.replace(/\D+/g, '');
    var contato = this.empresaForm.get('contato')?.value.replace(/\D+/g, '');
    var cnpj = this.empresaForm.get('cnpj')?.value.replace(/\D+/g, '');
    if (tipoEmpresaDto === 'FILIAL') tipoEmpresa = TipoEmpresa.FILIAL;
    this.empresaForm.get('tipoEmpresa')?.setValue(tipoEmpresa);
    this.empresaForm.get('enderecoCep')?.setValue(cep);
    this.empresaForm.get('contato')?.setValue(contato);
    this.empresaForm.get('cnpj')?.setValue(cnpj);

    if (this.pessoaJuridica.id > 0) {
      this.empresaService.editarEmpresa(this.empresaForm.value).subscribe(response => {
        this.empresaForm.reset();
        this.router.navigate(['/']);
      });
    } else {
      this.empresaService.salvandoEmpresa(this.empresaForm.value).subscribe(response => {
        this.empresaForm.reset();
        this.router.navigate(['/']);
      });

    }
  }



  cep() {
    var cep = this.empresaForm.get('enderecoCep')?.value;
    cep = cep.replace(/\D+/g, '');
    this.isLoading = true;
    this.cEPService.getCEP(cep).subscribe(response => {
      this.empresaForm.get('enderecoBairro')?.setValue(response.bairro);
      this.empresaForm.get('enderecoComplemento')?.setValue(response.complemento);
      this.empresaForm.get('enderecoLocalidade')?.setValue(response.localidade);
      this.empresaForm.get('enderecoLogradouro')?.setValue(response.logradouro);
      this.empresaForm.get('enderecoUf')?.setValue(response.uf);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    })
  }

  onChange(event: any) {
    if (event === 'FILIAL') {
      this.empresaService.getListaMatriz().subscribe((response: any) => {
        this.tiposMatriz = response;
      })
    } else if (event === 'MATRIZ') {
      this.tiposMatriz.length = 0;
    }
  }
}
