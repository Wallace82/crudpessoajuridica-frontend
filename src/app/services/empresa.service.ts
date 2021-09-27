import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { PessoaJuridica } from './../models/PessoaJuridica';
import { PessoaJuridicaFilter } from '../models/PessoaJuridicaFilter';
import { Paginacao } from '../models/Paginacao';
import { Observable } from 'rxjs';

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

  editarEmpresa(empresa: PessoaJuridica) {
    return this.http.put(`${API_CONFIG.baseUrl}/cadastro`, empresa);
  }

  
  deleteEmpresa(id: string) {
    return this.http.delete(`${API_CONFIG.baseUrl}/cadastro/${id}`);
  }

  getListaMatriz(): Observable<PessoaJuridica[]> {
    return this.http.get<PessoaJuridica[]>(`${API_CONFIG.baseUrl}/cadastro/matrizes`);
  }

  getEmpresaId(id: string | null): Observable<PessoaJuridica> {
    return this.http.get<PessoaJuridica>(`${API_CONFIG.baseUrl}/cadastro/${id}`);
  }

  listarFiltroEmpresa(empresaFilter:PessoaJuridicaFilter) {
    return this.http.post<Paginacao>(`${API_CONFIG.baseUrl}/cadastro/filtrar?page=${empresaFilter.page}&size${empresaFilter.size}`,empresaFilter);
  }








}
