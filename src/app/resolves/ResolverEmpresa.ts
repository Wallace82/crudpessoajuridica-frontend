import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpresaService } from '../services/empresa.service';
import { PessoaJuridica } from './../models/PessoaJuridica';

@Injectable({
  providedIn: 'root',
})
export class ResolverEmpresa implements Resolve<any> {

  constructor(private empresaService: EmpresaService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    var dataSource!: Observable<PessoaJuridica>;
    let id = route.paramMap.get('id');
    if(id != '0') {
      dataSource = this.empresaService.getEmpresaId(id);
    } else {
      
      this.router.navigate(['/']);
    }
    return dataSource;
}
}
