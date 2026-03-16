import TipoTeste from "../enums/StatusTeste.js";
export default class Teste {
    id;
    tipo;
    constructor(id) {
        this.id = id;
        this.tipo = TipoTeste.Simulacao;
    }
    estrutural() {
        this.tipo = TipoTeste.Estrutural;
    }
    voo() {
        this.tipo = TipoTeste.Voo;
    }
    motor() {
        this.tipo = TipoTeste.Motor;
    }
    sistema() {
        this.tipo = TipoTeste.Sistema;
    }
    certificado() {
        this.tipo = TipoTeste.Certificacao;
    }
}
