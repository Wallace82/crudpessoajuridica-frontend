import { TipoEmpresa } from './TipoEmpresa';

export class PessoaJuridicaFilter {
    cnpj: string = '';
    nomeEmpresa: string = '';
    tipoEmpresa: string = '';
    page:number = 0;
    size:number = 5;

    constructor() {
      this.cnpj = "";
      this.nomeEmpresa = "";
      this.tipoEmpresa ;
    }

    public setValores(
      cnpj:string,
      nomeEmpresa:string,
      tipoEmpresa:string,
      page:number,
      size:number) {

      this.cnpj = cnpj;
      this.nomeEmpresa = nomeEmpresa;
      this.tipoEmpresa = tipoEmpresa;
      this.page = page;
      this.size= size;
    }
  }