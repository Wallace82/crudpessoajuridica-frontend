import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { PessoaJuridica } from './../models/PessoaJuridica';
import { PessoaJuridicaFilter } from '../models/PessoaJuridicaFilter';
import { Paginacao } from '../models/Paginacao';

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

  listarFiltroEmpresa(empresaFilter:PessoaJuridicaFilter) {
    return this.http.post<Paginacao>(`${API_CONFIG.baseUrl}/cadastro/filtrar`,empresaFilter);
  }








}
