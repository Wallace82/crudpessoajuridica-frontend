import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CEPService {


  constructor(
    private http: HttpClient,
  ) {

  }

  getCEP(cep: string | null): Observable<any>{
    return this.http.get<any>(`${API_CONFIG.baseUrl}/buscarcep/${cep}`);
  }




}
