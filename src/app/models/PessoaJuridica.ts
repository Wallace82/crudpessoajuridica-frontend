
export class PessoaJuridica {
    id: number = 0;
    cnpj: string = '';
    contato: string = '';
    email: string = '';
    enderecoBairro: string = '';
    enderecoCep: string = '';
    enderecoComplemento: string = '';
    enderecoLogradouro: string = '';
    enderecoLocalidade: string = '';
    enderecoUf: string = '';
    matrizId: number = 0;
    nome: string = '';
    razaoSocial: string = '';
    tipoEmpresa: string = '';

    
    constructor() {
      this.id = 0;
      this.cnpj = "";
      this.contato = "";
      this.email = "";
      this.enderecoBairro = "";
      this.enderecoCep = "";
      this.enderecoComplemento = "";
      this.enderecoLogradouro = "";
      this.enderecoLocalidade = "";
      this.enderecoUf = "";
      this.matrizId = 0;
      this.nome = "";
      this.razaoSocial = "";
      this.tipoEmpresa = "";
    }
  }