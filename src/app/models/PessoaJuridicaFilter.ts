import { TipoEmpresa } from './TipoEmpresa';

export class PessoaJuridicaFilter {
    setPage(arg0: number) {
      throw new Error('Method not implemented.');
    }
    cnpj: string = '';
    nomeEmpresa: string = '';
    tipoEmpresa: string = '';
    page:any = 5;
    size:any = 0;

    constructor() {
      this.cnpj = "";
      this.nomeEmpresa = "";
      this.tipoEmpresa ;
    }

    public setValores(
      cnpj:string,
      nomeEmpresa:string,
      tipoEmpresa:string,
      page:any,
      size:any) {

      this.cnpj = cnpj;
      this.nomeEmpresa = nomeEmpresa;
      this.tipoEmpresa = tipoEmpresa;
      this.page = page;
      this.size= size;
    }
  }