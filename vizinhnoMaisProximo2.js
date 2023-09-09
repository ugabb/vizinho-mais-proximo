function distancia(cidade1, cidade2) {
    const dx = cidade1[0] - cidade2[0];
    const dy = cidade1[1] - cidade2[1];
    return Math.sqrt(dx * dx + dy * dy);
}

function caixeiro_viajante_vizinho_mais_proximo(cidades) {
    const n = cidades.length;
    const cidade_inicial = 0;
    const rota = [cidade_inicial];
    const visitadas = new Set([cidade_inicial]);

    while (rota.length < n) {
        const cidade_atual = rota[rota.length - 1];
        let distancia_minima = Infinity;
        let cidade_proxima = null;

        for (let proxima_cidade = 0; proxima_cidade < n; proxima_cidade++) {
            if (!visitadas.has(proxima_cidade)) {
                const dist = distancia(cidades[cidade_atual], cidades[proxima_cidade]);
                if (dist < distancia_minima) {
                    distancia_minima = dist;
                    cidade_proxima = proxima_cidade;
                }
            }
        }

        rota.push(cidade_proxima);
        visitadas.add(cidade_proxima);
    }

    rota.push(cidade_inicial);

    return rota;
}

// Função para calcular a distância total de uma rota
function calcular_distancia_total(rota, cidades) {
    let distancia_total = 0;
    for (let i = 0; i < rota.length - 1; i++) {
        const cidade_atual = rota[i];
        const proxima_cidade = rota[i + 1];
        distancia_total += distancia(cidades[cidade_atual], cidades[proxima_cidade]);
    }
    return distancia_total;
}

// Exemplo de uso com um grande número de cidades
const numero_de_cidades = 50;
const cidades_aleatorias = [];

// Gerar cidades aleatórias
for (let i = 0; i < numero_de_cidades; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    cidades_aleatorias.push([x, y]);
}

const rota_otima = caixeiro_viajante_vizinho_mais_proximo(cidades_aleatorias);
const distancia_total_rota = calcular_distancia_total(rota_otima, cidades_aleatorias);

console.log("Rota encontrada pelo algoritmo do Vizinho Mais Próximo:");
console.log(rota_otima);
console.log("Distância total da rota encontrada:", distancia_total_rota);
