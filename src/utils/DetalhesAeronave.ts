import Aeronave from "../classes/Aeronave.js";

export class exibirDetalhesAeronave {
  static exibirDetalhesCompletos(aeronave: Aeronave): void {
    console.log(`\n==================================================`);
    console.log(`💻 RELATÓRIO TÉCNICO DA AERONAVE [${aeronave.codigo}]`);
    console.log(`==================================================`);
    console.log(`• Modelo:      ${aeronave.modelo}`);
    console.log(`• Categoria:   ${aeronave.tipo}`);
    console.log(`• Capacidade:  ${aeronave.capacidade} passageiros`);
    console.log(`• Autonomia:   ${aeronave.alcance} km`);
    console.log(`--------------------------------------------------`);

    console.log(`PEÇAS INTEGRADAS (${aeronave.pecas.length})`);
    if (aeronave.pecas.length === 0) {
      console.log("Nenhuma peça associada a este modelo.");
    } else {
      aeronave.pecas.forEach((peca, index) => {
        console.log(`   ${index + 1}. [${peca.id}] ${peca.nome}`);
        console.log(`      └ Tipo: ${peca.tipo} | Status: ${peca.status}`);
      });
    }

    console.log(`\nCRONOGRAMA DE PRODUÇÃO (${aeronave.etapas.length})`);
    if (aeronave.etapas.length === 0) {
      console.log(" Nenhuma etapa de fabricação registrada.");
    } else {
      aeronave.etapas.forEach((etapa, index) => {
        console.log(`   [Etapa ${index + 1}] ${etapa.nome}`);
        console.log(`   └ Status: ${etapa.status}`);
      });
    }

    console.log(
      `\n HISTÓRICO DE TESTES DA AERONAVE (${aeronave.testes.length})`,
    );
    if (aeronave.testes.length === 0) {
      console.log(" Nenhum teste de segurança executado ainda.");
    } else {
      aeronave.testes.forEach((teste) => {
        console.log(`   • Teste de Sistema: ${teste.tipo}`);
        console.log(`     └ Resultado: ${teste.resultado}`);
      });
    }
    console.log(`==================================================\n`);
  }
}
