import { NivelPermissao } from "../enums/NivelPermissao.js";
export default class Funcionario {
    id;
    nome;
    telefone;
    endereco;
    usuario;
    senha;
    _nivelPermissao;
    constructor(id, nome, telefone, endereco, usuario, senha, nivelPermissao) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.usuario = usuario;
        this.senha = senha;
        this._nivelPermissao = nivelPermissao;
    }
    get nivelPermissao() {
        return this._nivelPermissao;
    }
    autenticar(usuario, senha) {
        return this.usuario === usuario && this.senha === senha;
    }
    isAdmin() {
        return this._nivelPermissao === NivelPermissao.ADMINISTRADOR;
    }
}
