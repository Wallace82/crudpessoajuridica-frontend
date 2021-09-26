import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { PessoaJuridica } from './../models/PessoaJuridica';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {


  constructor(
    private http: HttpClient,
  ) {

  }

  salvandoEmpresa(empresa: PessoaJuridica) {
    return this.http.post(`${API_CONFIG.baseUrl}/cadastro`, empresa);
  }







}
