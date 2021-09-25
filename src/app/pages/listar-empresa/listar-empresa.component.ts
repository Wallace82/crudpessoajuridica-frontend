import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {
 
  isLoading = false;
  cars: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }


  pesquisar(event: any) {
  this.isLoading = !this.isLoading;

  }

}
