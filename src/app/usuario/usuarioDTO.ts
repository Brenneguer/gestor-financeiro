export class UsuarioDTO {

  private codigo: number;
  private nome: string;
  private email: string;
  private senha: string;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.senha = senha;
    this.email = email;
  }

  get getNome(): string  {
    return this.nome;
  }
  set setNome(nome: string) {
    this.nome = nome;
  }

  get getEmail(): string {
    return this.email;
  }
  set setEmail(email: string) {
    this.email = email;
  }

  get getSenha() {
    return this.senha;
  }
  set setSenha(senha: string) {
    this.senha = senha;
  }

  get getCodigo(): number {
    return this.codigo;
  }
  setCodigo(codigo: number) {
    this.codigo = codigo;
  }


}
