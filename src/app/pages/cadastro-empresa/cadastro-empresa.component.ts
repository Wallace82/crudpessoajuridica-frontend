import { Component, OnInit } from '@angular/core';
import { TipoEmpresa } from 'src/app/models/TipoEmpresa';
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

  cities: TipoEmpresa[];

  selectedCity!: TipoEmpresa;

  isLoading: boolean = false;

  constructor() {
    this.cities = [
      {label: 'MATRIZ', value: '0'},
      {label: 'FILIAL', value: '1'},
    ];
   }

   keys() : Array<string> {
    var keys = Object.keys(this.cities);
    return keys;
}

  ngOnInit(): void {
  }

  cep(event: any) {
    this.isLoading = !this.isLoading;
  }

}
