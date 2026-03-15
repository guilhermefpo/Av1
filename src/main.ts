import * as readline from "readline";
import Aeronave from "./classes/Aeronave.js";
import Etapa from "./classes/Etapa.js";
import Funcionario from "./classes/Funcionario.js";
import Peca from "./classes/Peca.js";
import Teste from "./classes/Teste.js";
import GerenciadorAeronave from "./sistema/GerenciadorAeronave.js";
import Relatorio from "./sistema/Relatorio.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const aeronave = new Aeronave("A001", "Boeing 737");
const ger = new GerenciadorAeronave(aeronave);
const relatorio = new Relatorio();
function iniciar() {
  console.log("\n=== Sistema Aeronáutico ===");
  console.log("Comandos:");
  console.log("funcionario id nome idade");
  console.log("peca nome");
  console.log("etapa nome");
  console.log("teste tipo");
  console.log("removerFuncionario id");
  console.log("relatorio");
  console.log("sair");

  rl.question("\nDigite comando: ", (entrada) => {
    if (entrada.toLowerCase() === "sair") {
      console.log("Encerrando o sistema...");
      rl.close();
      return;
    }

    const partes = entrada.split(" ");
    const comando = partes[0]?.toLowerCase();

    if (comando === "funcionario") {
      const id = partes[1];
      const idade = Number(partes[partes.length - 1]);
      const nome = partes.slice(2, partes.length - 1).join(" ");

      if (!nome) {
        console.log("Nome Obrigatório.");
        return iniciar();
      }

      if (isNaN(idade)) {
        console.log("Idade Inválida.");
        return iniciar();
      }

      const f = new Funcionario(`${id}`, nome, idade);
      ger.adicionarFuncionario(f);

      console.log("Funcionário adicionado.");
    } else if (comando === "peca") {
      const nome = partes.slice(1).join(" ");

      const p = new Peca(`${nome}`);
      ger.adicionarPeca(p);

      console.log("Peça adicionada.");
    } else if (comando === "etapa") {
      const e = new Etapa();
      ger.adicionarEtapa(e);

      console.log("Etapa adicionada.");
    } else if (comando === "teste") {
      const t = new Teste();
      ger.adicionarTeste(t);

      console.log("Teste adicionado.");
    } else if (comando === "removerfuncionario") {
      const id = partes[1];

      if (!id) {
        console.log("Informe o id do funcionário.");
        return iniciar();
      }

      const funcionarioExiste = ger.funcionarios.some((f) => f.id === id);

      if (!funcionarioExiste) {
        console.log("Funcionário não existe.");
        return iniciar();
      }

      ger.removerFuncionario(id);
      console.log("Funcionário removido.");
    } else if (comando === "relatorio") {
      relatorio.gerar(ger);
    } else {
      console.log("Comando inválido.");
    }

    iniciar();
  });
}

iniciar();
/* const aeronave = new Aeronave("A001", "Boeing 737");
const gerador = new GerenciadorAeronave(aeronave);

// Funcionários
const funcionarios = [
  new Funcionario("Alysa Liu", 22),
  new Funcionario("Carlos Felipo", 35),
  new Funcionario("Jane Clear", 30),
  new Funcionario("Amber Glean", 26),
  new Funcionario("Isabeau Levito", 18),
  new Funcionario("Guilherme Fernando", 19),
];

funcionarios.forEach((f) => gerador.adicionarFuncionario(f));

const peca1 = new Peca("Motor");
peca1.usar();
gerador.adicionarPeca(peca1);

const etapa1 = new Etapa();
etapa1.revisao();
gerador.adicionarEtapa(etapa1);

const teste1 = new Teste();
teste1.certificado();
gerador.adicionarTeste(teste1);

const relatorio = new Relatorio();
relatorio.gerar(gerador);
 */
