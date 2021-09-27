import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpresaService } from '../services/empresa.service';
import { PessoaJuridica } from './../models/PessoaJuridica';

@Injectable({
  providedIn: 'root',
})
export class ResolverEmpresa implements Resolve<any> {

  constructor(private empresaService: EmpresaService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    const dataSource: Observable<PessoaJuridica> = this.empresaService.getEmpresaId(id);
    return dataSource;
}
}
