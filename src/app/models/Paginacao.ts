import { PessoaJuridica } from './PessoaJuridica'

export class Paginacao {
    content: PessoaJuridica[] = [];
  empty: boolean = false;
  first: boolean= false;
  last: boolean= false;
  number: number = 0 ;
  numberOfElements: number= 0 ;
  size: number= 0 ;
  totalElements: number= 0 ;
  totalPages: number= 0 ;
}