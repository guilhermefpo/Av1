import TipoTeste from "../enums/TipoTeste.js";
export default class Teste {
    tipo;
    constructor() {
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
