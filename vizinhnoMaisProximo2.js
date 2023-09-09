// Heurística do Vizinho mais Próximo

function vizinhoMaisProximo(grafo) {
  const numCidades = grafo.length; // Obtém o número de cidades no grafo
  const rota = [1]; // Iniciar a rota com o nó 1 (cidade de origem)
  let distancia = 0; // Inicializa a distância total percorrida como 0
  let i = 0; // Inicializa o índice da cidade atual na rota

  // Enquanto não visitarmos todas as cidades
  while (rota.length < numCidades) {
    let cidadeAtual = rota[i]; // Obtém a cidade atual
    let menorDistancia = Infinity; // Inicializa a menor distância como infinito
    let cidadeMaisProxima = null; // Inicializa a cidade mais próxima como nula

    // Percorre todas as cidades
    for (let j = 0; j < numCidades; j++) {
      if (!rota.includes(j + 1)) { // Verifica se a cidade não foi visitada
        const dist = grafo[cidadeAtual - 1][j]; // Obtém a distância entre as cidades
        if (dist < menorDistancia) {
          menorDistancia = dist; // Atualiza a menor distância
          cidadeMaisProxima = j + 1; // Atualiza a cidade mais próxima
        }
      }
    }

    // Se encontramos uma cidade mais próxima, a adicionamos à rota e atualizamos a distância
    if (cidadeMaisProxima !== null) {
      rota.push(cidadeMaisProxima);
      distancia += menorDistancia;
    }

    i++; // Passa para a próxima cidade na rota
  }

  // Voltar para a cidade de origem (nó 1) para completar o ciclo
  rota.push(1);
  distancia += grafo[rota[numCidades - 1] - 1][0]; // Adiciona a distância de volta à origem

  return { rota, distancia }; // Retorna a rota encontrada e a distância total
}

// Exemplo de uso com um grafo de distâncias entre cidades (matriz de adjacência)
const grafo = [
  [0, 29, 20, 21],
  [29, 0, 15, 18],
  [20, 15, 0, 28],
  [21, 18, 28, 0]
];

const resultado = vizinhoMaisProximo(grafo);
console.log("Rota:", resultado.rota);
console.log("Distância total:", resultado.distancia);
