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
    })
  }



}
