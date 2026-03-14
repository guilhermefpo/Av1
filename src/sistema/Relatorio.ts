import GerenciadorAeronave from "./GerenciadorAeronave.js";

export default class Relatorio {
  gerar(ger: GerenciadorAeronave) {
    console.log("===Relatório do Projeto===");

    console.log(`Aeronave: ${ger.aeronave.codigo} - ${ger.aeronave.modelo}`);

    console.log("\nFuncionários:");
    ger.funcionarios.forEach((f) => {
      console.log(`- ${f.nome} (${f.idade} anos)`);
    });

    console.log("\n Peças:");
    ger.pecas.forEach((p) => {
      console.log(`- ${p.nome} (${p.status})`);
    });

    console.log("\n Etapas:");
    ger.etapa.forEach((e) => {
      console.log(`- ${e.statusEtapa}`);
    });

    console.log("\n Testes:");
    ger.testes.forEach((t) => {
      console.log(`- ${t.tipo}`);
    });
  }
}
