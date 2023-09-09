### Implementação em Javascript Heurística do Vizinho Mais Proximo

- Esta função **`distancia`** calcula a distância euclidiana entre duas cidades representadas como coordenadas (x, y) no espaço bidimensional.

```jsx
function distancia(cidade1, cidade2) {
    const dx = cidade1[0] - cidade2[0];
    const dy = cidade1[1] - cidade2[1];
    return Math.sqrt(dx * dx + dy * dy);
}
```

- Função principal para o caixeiro viajante usando o algoritmo do **Vizinho Mais Próximo**
- Nesta parte, o algoritmo do Vizinho Mais Próximo é implementado. Ele começa de uma cidade inicial e, em cada passo, escolhe a cidade mais próxima que ainda não foi visitada, adicionando-a à rota. O loop continua até todas as cidades serem visitadas.

```jsx

function caixeiro_viajante_vizinho_mais_proximo(cidades) {
    const n = cidades.length; // Número de cidades
    const cidade_inicial = 0; // Começa na primeira cidade
    const rota = [cidade_inicial]; // Inicializa a rota com a primeira cidade
    const visitadas = new Set([cidade_inicial]); // Conjunto para controlar as cidades visitadas

    while (rota.length < n) {
        const cidade_atual = rota[rota.length - 1]; // A última cidade visitada na rota
        let distancia_minima = Infinity;
        let cidade_proxima = null;

        // Percorre todas as cidades para encontrar a mais próxima
        for (let proxima_cidade = 0; proxima_cidade < n; proxima_cidade++) {
            if (!visitadas.has(proxima_cidade)) {
                const dist = distancia(cidades[cidade_atual], cidades[proxima_cidade]);
                if (dist < distancia_minima) {
                    distancia_minima = dist;
                    cidade_proxima = proxima_cidade;
                }
            }
        }

        rota.push(cidade_proxima); // Adiciona a cidade mais próxima à rota
        visitadas.add(cidade_proxima); // Marca a cidade como visitada
    }

    rota.push(cidade_inicial); // Retorna à cidade inicial para completar o ciclo

    return rota; // Retorna a rota encontrada
}
```

- Esta função **`calcular_distancia_total`** calcula a distância total percorrida na rota, somando as distâncias entre todas as cidades na rota.

```jsx
function calcular_distancia_total(rota, cidades) {
    let distancia_total = 0;
    for (let i = 0; i < rota.length - 1; i++) {
        const cidade_atual = rota[i];
        const proxima_cidade = rota[i + 1];
        distancia_total += distancia(cidades[cidade_atual], cidades[proxima_cidade]);
    }
    return distancia_total;
}
```

- Neste trecho, um exemplo de uso do algoritmo é demonstrado. Cidades aleatórias são geradas, e o algoritmo do Vizinho Mais Próximo é aplicado para encontrar a rota ótima. Em seguida, a rota e a distância total percorrida são exibidas no console.
- O código geralmente encontra uma solução aproximada para o problema do caixeiro viajante, mas não necessariamente a solução ótima, pois é um algoritmo heurístico.

```jsx
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
```
