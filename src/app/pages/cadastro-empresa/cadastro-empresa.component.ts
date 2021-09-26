import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PessoaJuridica } from 'src/app/models/PessoaJuridica';
import { TipoEmpresa } from 'src/app/models/TipoEmpresa';
import { CEPService } from './../../services/cep.service';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  tipoEmpresas: TipoEmpresa[];

  selectedTipoEmpresa!: TipoEmpresa;

  isLoading: boolean = false;

  empresaForm!: FormGroup;

  constructor(private cEPService:CEPService) {
    this.tipoEmpresas = [
      {label: 'MATRIZ', value: '0'},
      {label: 'FILIAL', value: '1'},
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
   
  }


  cep() {
    var cep = this.empresaForm.get('enderecoCep')?.value;
  console.log(this.empresaForm.get('enderecoCep')?.value);
    this.isLoading = true;
    this.cEPService.getCEP(cep).subscribe(response => {
      console.log(response);
      this.empresaForm.get('enderecoBairro')?.setValue(response.bairro);
      this.empresaForm.get('enderecoComplemento')?.setValue(response.complemento  );
      this.empresaForm.get('enderecoLocalidade')?.setValue(response.localidade);
      this.empresaForm.get('enderecoLogradouro')?.setValue(response.logradouro);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    })
  }

}
