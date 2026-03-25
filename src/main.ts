
/* import * as readline from "readline";
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

// Contadores para gerar IDs automáticos
let contadorPeca = 1;
let contadorEtapa = 1;
let contadorTeste = 1;

function iniciar() {
  console.log("\n=== Sistema Aeronáutico ===");
  console.log("Comandos:");
  console.log("funcionario id nome idade");
  console.log("peca nome");
  console.log("etapa nome");
  console.log("teste tipo");
  console.log("removerFuncionario id");
  console.log("removerPeca id");
  console.log("removerEtapa id");
  console.log("removerTeste id");
  console.log("relatorio");
  console.log("sair");

  rl.question("\nDigite comando: ", (entrada) => {
    if (entrada.toLowerCase() === "sair") {
      console.log("Encerrando o sistema...");
      rl.close();
      return;
    }

    const partes = entrada.trim().split(/\s+/);
    const comando = partes[0]?.toLowerCase();

    // ===== COMANDOS =====
    if (comando === "funcionario") {
      const id = partes[1];
      const idade = Number(partes[partes.length - 1]);
      const nome = partes.slice(2, partes.length - 1).join(" ");

      if (!id || !nome) {
        console.log("ID ou Nome inválido.");
        return iniciar();
      }
      if (isNaN(idade)) {
        console.log("Idade inválida.");
        return iniciar();
      }

      const f = new Funcionario(id, nome, idade);
      ger.adicionarFuncionario(f);
      console.log("Funcionário adicionado.");
    } else if (comando === "peca") {
      const nome = partes.slice(1).join(" ");
      if (!nome) {
        console.log("Nome da peça obrigatório.");
        return iniciar();
      }

      const id = `P${contadorPeca++}`;
      const p = new Peca(id, nome); // ID primeiro, nome depois
      ger.adicionarPeca(p);
      console.log(`Peça adicionada com ID ${p.id} e nome ${p.nome}.`);
    } else if (comando === "removerpeca") {
      const id = partes[1];
      if (!id) {
        console.log("Informe o ID da peça.");
        return iniciar();
      }
      const existe = ger.pecas.find((p) => p.id === id);
      if (!existe) {
        console.log("Peça não encontrada.");
        return iniciar();
      }
      ger.removerPeca(id);
      console.log("Peça removida.");
    } else if (comando === "etapa") {
      const nome = partes.slice(1).join(" ");
      if (!nome) {
        console.log("Nome da etapa obrigatório.");
        return iniciar();
      }

      const id = `E${contadorEtapa++}`;
      const e = new Etapa(id, nome);
      ger.adicionarEtapa(e);
      console.log(`Etapa adicionada com ID ${e.id}, nome: ${e.nome}.`);
    } else if (comando === "removeretapa") {
      const id = partes[1];
      if (!id) {
        console.log("Informe o ID da etapa.");
        return iniciar();
      }
      const existe = ger.etapa.find((e) => e.id === id);
      if (!existe) {
        console.log("Etapa não encontrada.");
        return iniciar();
      }
      ger.removerEtapa(id);
      console.log("Etapa removida.");
    } else if (comando === "teste") {
      const tipoInput = partes.slice(1).join(" ");
      if (!tipoInput) {
        console.log("Tipo do teste obrigatório.");
        return iniciar();
      }

      const id = `T${contadorTeste++}`;
      const t = new Teste(id); // ID primeiro
      const ttipo = tipoInput; // Atribui o tipo depois
      ger.adicionarTeste(t);
      console.log(`Teste adicionado com ID ${t.id}, tipo: ${ttipo}.`);
    } else if (comando === "removerteste") {
      const id = partes[1];
      if (!id) {
        console.log("Informe o ID do teste.");
        return iniciar();
      }
      const existe = ger.testes.find((t) => t.id === id);
      if (!existe) {
        console.log("Teste não encontrado.");
        return iniciar();
      }
      ger.removerTeste(id);
      console.log("Teste removido.");
    } else if (comando === "removerfuncionario") {
      const id = partes[1];
      if (!id) {
        console.log("Informe o ID do funcionário.");
        return iniciar();
      }
      const existe = ger.funcionarios.find((f) => f.id === id);
      if (!existe) {
        console.log("Funcionário não encontrado.");
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
