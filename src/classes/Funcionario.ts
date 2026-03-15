export default class Funcionario {
  id: string;
  nome: string;
  idade: number;

  constructor(id: string, nome: string, idade: number) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
  }
}
