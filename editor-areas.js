

// ==========================================
// THE LAST TAKE - EDITOR TEMPORÁRIO DE ÁREAS
// ==========================================

// Controla se o editor está aberto
let editorAtivo = false;

// Número da área que está sendo editada
let areaSelecionada = 0;

// Número do ponto que está sendo arrastado
let pontoArrastado = null;


// ==========================================
// CRIA O PAINEL DO EDITOR
// ==========================================

const painel = document.createElement("div");

painel.id = "painel-editor";

painel.innerHTML = `
    <h3>Editor de áreas</h3>

    <p>Selecione uma área:</p>

    <select id="seletor-areas"></select>

    <button id="botao-nova-area">+ Nova área</button>

    <hr>

    <p><strong>Coordenadas dos pontos:</strong></p>

    <div id="coordenadas-pontos">
        Nenhuma área selecionada.
    </div>

    <hr>

    <button id="botao-copiar">Copiar código da área</button>

    <p id="mensagem-editor">
        Arraste os pontos amarelos para posicioná-los.
    </p>

    <hr>

    <p>Pressione E para fechar o editor.</p>
`;

document.body.appendChild(painel);


// ==========================================
// ACESSA A ÁREA QUE ESTÁ SENDO EDITADA
// ==========================================

function obterAreaAtual() {

    const cenario = window.cenarios[window.cenaAtual];

    if (!cenario || cenario.areas.length === 0) {
        return null;
    }

    return cenario.areas[areaSelecionada];

}


// ==========================================
// ATUALIZA A LISTA DE ÁREAS
// ==========================================

function atualizarListaAreas() {

    const seletor = document.getElementById("seletor-areas");

    const cenario = window.cenarios[window.cenaAtual];

    seletor.innerHTML = "";

    cenario.areas.forEach((area, indice) => {

        const opcao = document.createElement("option");

        opcao.value = indice;
        opcao.textContent = area.nome;

        seletor.appendChild(opcao);

    });

    if (cenario.areas.length > 0) {

        areaSelecionada = Math.min(
            areaSelecionada,
            cenario.areas.length - 1
        );

        seletor.value = areaSelecionada;

    }

}


// ==========================================
// CRIA UMA NOVA ÁREA
// ==========================================

function adicionarNovaArea() {

    const cenario = window.cenarios[window.cenaAtual];

    const nome = prompt("Digite um nome para esta área:");

    if (!nome || nome.trim() === "") {
        return;
    }

    // Cria uma área inicial no centro do cenário
    const novaArea = {

        nome: nome.trim(),

        // O destino começa sendo o cenário atual.
        // Depois você pode trocar pelo destino correto.
        destino: window.cenaAtual,

        pontos: [
            { x: 30, y: 30 },
            { x: 70, y: 30 },
            { x: 70, y: 70 },
            { x: 30, y: 70 }
        ]

    };

    cenario.areas.push(novaArea);

    // Seleciona a área recém-criada
    areaSelecionada = cenario.areas.length - 1;

    atualizarListaAreas();

    desenharPontos();

}


// ==========================================
// DESENHA OS QUATRO PONTOS NA TELA
// ==========================================

function desenharPontos() {

    const container = document.querySelector(".cena-container");

    if (!container) return;

    // Remove a camada anterior, se existir
    const camadaAntiga = document.getElementById("camada-editor");

    if (camadaAntiga) {
        camadaAntiga.remove();
    }

    const area = obterAreaAtual();

    // Se não houver área, não desenha os pontos
    if (!area) {

        atualizarCoordenadas();

        return;
    }

    // Camada que fica por cima do cenário
    const camada = document.createElement("div");

    camada.id = "camada-editor";

    // Pré-visualização da área selecionada
    const previa = document.createElement("div");

    previa.classList.add("area-editor-preview");

    previa.style.clipPath = `polygon(${
        area.pontos
            .map(ponto => `${ponto.x}% ${ponto.y}%`)
            .join(", ")
    })`;

    camada.appendChild(previa);


    // Cria os quatro marcadores
    area.pontos.forEach((ponto, indice) => {

        const marcador = document.createElement("div");

        marcador.classList.add("ponto-editor");

        marcador.textContent = `P${indice + 1}`;

        marcador.style.left = ponto.x + "%";
        marcador.style.top = ponto.y + "%";

        // Começa a arrastar o ponto
        marcador.addEventListener("pointerdown", (evento) => {

            evento.preventDefault();

            evento.stopPropagation();

            pontoArrastado = indice;

            marcador.setPointerCapture(evento.pointerId);

        });

        // Atualiza a posição enquanto arrasta
        marcador.addEventListener("pointermove", (evento) => {

            if (pontoArrastado !== indice) return;

            moverPonto(evento, container);

        });

        // Finaliza o movimento
        marcador.addEventListener("pointerup", () => {

            pontoArrastado = null;

        });

        marcador.addEventListener("pointercancel", () => {

            pontoArrastado = null;

        });

        camada.appendChild(marcador);

    });

    container.appendChild(camada);

    atualizarCoordenadas();

}


// ==========================================
// MOVIMENTA UM PONTO
// ==========================================

function moverPonto(evento, container) {

    const area = obterAreaAtual();

    if (!area) return;

    // Descobre o tamanho e a posição do cenário
    const retangulo = container.getBoundingClientRect();

    // Converte a posição do mouse para porcentagem
    let x = ((evento.clientX - retangulo.left) / retangulo.width) * 100;

    let y = ((evento.clientY - retangulo.top) / retangulo.height) * 100;

    // Impede que o ponto saia dos limites da imagem
    x = Math.max(0, Math.min(100, x));

    y = Math.max(0, Math.min(100, y));

    // Atualiza a coordenada do ponto selecionado
    area.pontos[pontoArrastado] = {

        x: Number(x.toFixed(2)),
        y: Number(y.toFixed(2))

    };

    // Atualiza os marcadores sem recriá-los.
    // Isso evita interromper o arraste do mouse.
    const marcadores = document.querySelectorAll(".ponto-editor");

    marcadores.forEach((marcador, indice) => {

        marcador.style.left = area.pontos[indice].x + "%";

        marcador.style.top = area.pontos[indice].y + "%";

    });

    // Atualiza o formato da área amarela
    const previa = document.querySelector(".area-editor-preview");

    if (previa) {

        previa.style.clipPath = `polygon(${
            area.pontos
                .map(ponto => `${ponto.x}% ${ponto.y}%`)
                .join(", ")
        })`;

    }

    // Atualiza os números na tela
    atualizarCoordenadas();

}


// ==========================================
// MOSTRA AS COORDENADAS DOS PONTOS
// ==========================================

function atualizarCoordenadas() {

    const elemento = document.getElementById("coordenadas-pontos");

    const area = obterAreaAtual();

    if (!area) {

        elemento.textContent = "Nenhuma área selecionada.";

        return;
    }

    elemento.innerHTML = "";

    area.pontos.forEach((ponto, indice) => {

        const linha = document.createElement("p");

        linha.textContent =
            `P${indice + 1}: X = ${ponto.x}% | Y = ${ponto.y}%`;

        elemento.appendChild(linha);

    });

}


// ==========================================
// COPIA O CÓDIGO DA ÁREA
// ==========================================

async function copiarCodigoArea() {

    const area = obterAreaAtual();

    if (!area) {

        alert("Crie ou selecione uma área primeiro.");

        return;
    }

    // Monta o objeto JavaScript pronto para copiar
    const codigo = JSON.stringify(area, null, 4) + ",";

    try {

        await navigator.clipboard.writeText(codigo);

        document.getElementById("mensagem-editor").textContent =
            "Código copiado! Cole dentro de areas no movimentacao.js.";

    } catch (erro) {

        // Alternativa caso o navegador bloqueie a cópia
        const campo = document.createElement("textarea");

        campo.value = codigo;

        document.body.appendChild(campo);

        campo.select();

        document.execCommand("copy");

        campo.remove();

        document.getElementById("mensagem-editor").textContent =
            "Tentativa de cópia realizada. Confira o código no movimentacao.js.";

    }

}


// ==========================================
// ABRIR E FECHAR O EDITOR
// ==========================================

function alternarEditor() {

    editorAtivo = !editorAtivo;

    if (editorAtivo) {

        painel.style.display = "block";

        areaSelecionada = 0;

        atualizarListaAreas();

        desenharPontos();

    } else {

        painel.style.display = "none";

        pontoArrastado = null;

        // Remove os pontos e atualiza as áreas clicáveis
        window.mostrarCenario(window.cenaAtual);

    }

}


// ==========================================
// EVENTOS DOS BOTÕES DO PAINEL
// ==========================================

document.getElementById("botao-nova-area").addEventListener("click", () => {

    adicionarNovaArea();

});


document.getElementById("botao-copiar").addEventListener("click", () => {

    copiarCodigoArea();

});


document.getElementById("seletor-areas").addEventListener("change", (evento) => {

    areaSelecionada = Number(evento.target.value);

    desenharPontos();

});


// ==========================================
// TECLA E PARA ABRIR OU FECHAR O EDITOR
// ==========================================

document.addEventListener("keydown", (evento) => {

    // Ignora a tecla se o usuário estiver digitando em um campo
    if (
        evento.target.tagName === "INPUT" ||
        evento.target.tagName === "TEXTAREA" ||
        evento.target.tagName === "SELECT"
    ) {
        return;
    }

    if (evento.key.toLowerCase() === "e") {

        alternarEditor();

    }

});


// ==========================================
// QUANDO O CENÁRIO MUDA
// ==========================================

window.addEventListener("cenarioAtualizado", () => {

    if (!editorAtivo) return;

    areaSelecionada = 0;

    atualizarListaAreas();

    desenharPontos();

});
