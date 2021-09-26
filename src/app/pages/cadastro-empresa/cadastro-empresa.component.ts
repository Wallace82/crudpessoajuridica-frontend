import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaJuridica } from 'src/app/models/PessoaJuridica';
import { TipoEmpresa } from 'src/app/models/TipoEmpresa';
import { TipoEmpresaDTO } from 'src/app/models/TipoEmpresaDTO';
import { CEPService } from './../../services/cep.service';
import { EmpresaService } from './../../services/empresa.service';


@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  tipoEmpresas: TipoEmpresaDTO[];

  selectedTipoEmpresa!: TipoEmpresaDTO;

  isLoading: boolean = false;

  empresaForm!: FormGroup;

  constructor(private cEPService: CEPService, private empresaService: EmpresaService, private router: Router) {
    this.tipoEmpresas = [
      { label: 'MATRIZ', value: '0' },
      { label: 'FILIAL', value: '1' },
    ];
    this.createForm(new PessoaJuridica())
  }

  createForm(pessoaJuridica: PessoaJuridica) {
    this.empresaForm = new FormGroup({
      id: new FormControl(pessoaJuridica.id),
      cnpj: new FormControl(pessoaJuridica.cnpj, [Validators.required]),
      contato: new FormControl(pessoaJuridica.contato, [Validators.required]),
      email: new FormControl(pessoaJuridica.email, [Validators.required, Validators.email]),
      enderecoBairro: new FormControl(pessoaJuridica.enderecoBairro, [Validators.required]),
      enderecoCep: new FormControl(pessoaJuridica.enderecoCep, [Validators.required]),
      enderecoComplemento: new FormControl(pessoaJuridica.enderecoComplemento),
      enderecoLogradouro: new FormControl(pessoaJuridica.enderecoLogradouro, [Validators.required]),
      enderecoLocalidade: new FormControl(pessoaJuridica.enderecoLocalidade, [Validators.required]),
      enderecoUf: new FormControl(pessoaJuridica.enderecoUf, [Validators.required]),
      matrizId: new FormControl(pessoaJuridica.matrizId),
      nome: new FormControl(pessoaJuridica.nome, [Validators.required]),
      razaoSocial: new FormControl(pessoaJuridica.razaoSocial, [Validators.required]),
      tipoEmpresa: new FormControl(pessoaJuridica.tipoEmpresa, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.empresaForm.get('cnpj'));
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
    console.log(this.empresaForm.get('tipoEmpresa')?.value);
    console.log(this.empresaForm.value);
    this.empresaService.salvandoEmpresa(this.empresaForm.value).subscribe(response => {
      this.empresaForm.reset();
      this.router.navigate(['/']);
    });
  }


  cep() {
    var cep = this.empresaForm.get('enderecoCep')?.value;
    cep = cep.replace(/\D+/g, '');
    console.log(cep);
    this.isLoading = true;
    this.cEPService.getCEP(cep).subscribe(response => {
      console.log(response);
      this.empresaForm.get('enderecoBairro')?.setValue(response.bairro);
      this.empresaForm.get('enderecoComplemento')?.setValue(response.complemento);
      this.empresaForm.get('enderecoLocalidade')?.setValue(response.localidade);
      this.empresaForm.get('enderecoLogradouro')?.setValue(response.logradouro);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    })
  }

}
