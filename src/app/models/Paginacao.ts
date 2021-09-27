import { PessoaJuridica } from './PessoaJuridica'

export class Paginacao {
    content: PessoaJuridica[] = [];
  
  last: boolean= false;
  totalPages: number= 0 ;
  totalElements: number= 0 ;
  size: number= 0 ;
  number: number = 0 ;
  first: boolean = true;
  numberOfElements: number= 0 ;
  empty: boolean = false;
 

}