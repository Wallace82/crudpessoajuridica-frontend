import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { PessoaJuridica } from 'src/app/models/PessoaJuridica';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {

  pessoaJuridica: PessoaJuridica;
  constructor(  private route: ActivatedRoute, private empresaService: EmpresaService) {
    this.pessoaJuridica = new PessoaJuridica();
    this.getEmpresa();
   }

  ngOnInit(): void {

  }

  getEmpresa() {
    this.route.data.subscribe((resolvedRouteData) => {
      this.pessoaJuridica = resolvedRouteData.data;
      this.pessoaJuridica.enderecoBairro = resolvedRouteData.data.endereco.bairro;
      this.pessoaJuridica.enderecoCep = resolvedRouteData.data.endereco.cep;
      this.pessoaJuridica.enderecoComplemento = resolvedRouteData.data.endereco.complemento;
      this.pessoaJuridica.enderecoLocalidade = resolvedRouteData.data.endereco.localidade;
      this.pessoaJuridica.enderecoLogradouro = resolvedRouteData.data.endereco.logradouro;
      this.pessoaJuridica.enderecoUf = resolvedRouteData.data.endereco.uf;
    })
  }
}
