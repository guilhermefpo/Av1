import GerenciadorAeronave from "./GerenciadorAeronave.js";

export default class Relatorio {
  gerar(ger: GerenciadorAeronave) {
    console.log("===Relatório do Projeto===");

    console.log(`Aeronave: ${ger.aeronave.codigo} - ${ger.aeronave.modelo}`);

    console.log("\nFuncionários:");
    ger.funcionarios.forEach((f) => {
      console.log(`-${f.id} ${f.nome} (${f.idade} anos)`);
    });

    console.log("\nPeças:");
    ger.pecas.forEach((p) => {
      console.log(`- ${p.nome} (${p.status})`);
    });

    console.log("\nEtapas:");
    ger.etapa.forEach((e) => {
      console.log(`- ${e.etapa}`);
    });

    console.log("\nTestes:");
    ger.testes.forEach((t) => {
      console.log(`- ${t.tipo}`);
    });
  }
}
