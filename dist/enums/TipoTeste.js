var TipoTeste;
(function (TipoTeste) {
    TipoTeste[TipoTeste["Simulacao"] = 0] = "Simulacao";
    TipoTeste[TipoTeste["Estrutural"] = 1] = "Estrutural";
    TipoTeste[TipoTeste["Voo"] = 2] = "Voo";
    TipoTeste[TipoTeste["Motor"] = 3] = "Motor";
    TipoTeste[TipoTeste["Sistema"] = 4] = "Sistema";
    TipoTeste[TipoTeste["Certificacao"] = 5] = "Certificacao";
})(TipoTeste || (TipoTeste = {}));
export default TipoTeste;
