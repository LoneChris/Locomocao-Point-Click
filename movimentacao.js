// ==========================================
// THE LAST TAKE - SISTEMA DE LOCOMOÇÃO
// ==========================================

// Lista de todos os cenários do jogo.
// Os caminhos precisam corresponder exatamente
// aos nomes das pastas e arquivos no computador.

window.cenarios = {

    // ESCRITÓRIO DO DETETIVE
    detetive1: {
        imagem: "The Last Take Cenarios/Escritorio Detetive/Escritorio1.png",

        areas: [
            {
                nome: "EntrarEscritorio",
                destino: "detetive2",
                pontos: [
                    { x: 52.97, y: 12.17 },
                    { x: 63.91, y: 13.86 },
                    { x: 63.49, y: 72.38 },
                    { x: 53.39, y: 76.93 }
                ]
            }
        ]
    },

    detetive2: {
        imagem: "The Last Take Cenarios/Escritorio Detetive/Escritorio2.png",
        areas: [
            {
                nome: "AproximarMesa",
                destino: "detetive3",
                pontos: [
                    { x: 28.33, y: 82.54 },
                    { x: 68.23, y: 62.75 },
                    { x: 91.51, y: 71.22 },
                    { x: 54.74, y: 100 }
                    ]
            }
        ]
    },

    detetive3: {
        imagem: "The Last Take Cenarios/Escritorio Detetive/Escritorio3.png",
        areas: [
        // Área 1: Começar o caso e ir até a mansão
            {
                nome: "ComeçarCaso",
                destino: "mansaoEntrada",
                pontos: [
                    { x: 37.66, y: 17.57 },
                    { x: 78.18, y: 41.27 },
                    { x: 57.45, y: 75.03 },
                    { x: 15.73, y: 29.42 }
                ]
            }
        ]
    },

    // ENTRADA DA MANSÃO
    mansaoEntrada: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/MansãoEntrada.png",
        areas: [
            {
                nome: "EntrarMansão",
                destino: "sala1",
                pontos: [
                    { x: 38.07, y: 42.33 },
                    { x: 65.83, y: 42.01 },
                    { x: 65.83, y: 70.26 },
                    { x: 38.13, y: 70.05 }
                ]
            },
        ]
    },

    // SALA DA MANSÃO
    sala1: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Sala/Sala1.png",
        areas: [
            {
                nome: "ParaQuarto",
                destino: "quarto1",
                pontos: [
                    { x: 24.38, y: 19.47 },
                    { x: 43.33, y: 25.4 },
                    { x: 42.86, y: 79.68 },
                    { x: 24.17, y: 88.36 }
                ]
            },
            {
                nome: "ParaCorredor",
                destino: "sala2",
                pontos: [
                    { x: 73.91, y: 26.67 },
                    { x: 83.44, y: 23.81 },
                    { x: 83.33, y: 88.99 },
                    { x: 72.97, y: 82.22 }
                ]
            },
        ]
    },

    sala2: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Sala/Sala2.png",
        areas: [
            {
                nome: "Escritorio",
                destino: "escritorio2",
                pontos: [
                    { x: 28.85, y: 34.39 },
                    { x: 35.78,y: 36.4 },
                    { x: 36.09,y: 73.65 },
                    { x: 29.17,y: 77.35 }
                ]
            },
            {
                nome: "SalaDeEstar1",
                "destino": "sala3",
                "pontos": [
                    { "x": 44.73, "y": 38.9 },
                    { "x": 48.83, "y": 38.06 },
                    { "x": 48.9, "y": 70.78 },
                    { "x": 44.66, "y": 70.45 }
                ]
            },
            {
                "nome": "SalaDeEstar2",
                "destino": "sala4",
                "pontos": [
                    { "x": 68.01, "y": 35.73 },
                    { "x": 76.65, "y": 34.39 },
                    { "x": 77.31, "y": 78.13 },
                    { "x": 68.59, "y": 75.63 }
                ]
            },
        ]
    },

    sala3: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Sala/Sala3.png",
        areas: [
            {
                "nome": "VoltarCorredor",
                "destino": "sala2",
                "pontos": [
                    { "x": 13.84, "y": 0 },
                    { "x": 22.47, "y": 0 },
                    { "x": 22.47, "y": 82.64 },
                    { "x": 13.98, "y": 82.47 }
                ]
            }
        ]
    },

    sala4: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Sala/Sala4.png",
        areas: [
            {
                nome: "OlharOutroLado",
                destino: "sala5",
                pontos: [
                    { x: 0, y: 90.98 },
                    { x: 99.93, y: 90.98 },
                    { x: 99.93, y: 100 },
                    { x: 0, y: 100 }
                ]
            },
            {
                "nome": "VoltarCorredor",
                "destino": "sala2",
                "pontos": [
                    { "x": 13.84, "y": 0 },
                    { "x": 22.47, "y": 0 },
                    { "x": 22.47, "y": 82.64 },
                    { "x": 13.98, "y": 82.47 }
                ]
            }
        ]
    },

    sala5: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Sala/Sala5.png",
        areas: [
            {
                nome: "OlharOutroLado",
                destino: "sala4",
                pontos: [
                    { x: 0, y: 90.98 },
                    { x: 99.93, y: 90.98 },
                    { x: 99.93, y: 100 },
                    { x: 0, y: 100 }
                ]
            }
        ]
    },

    // QUARTOS DA MANSÃO
    quarto1: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Quarto/Quarto1.png",
        areas: [
            {
                "nome": "VoltarCorredor",
                "destino": "sala1",
                "pontos": [
                    { "x": 13.84, "y": 0 },
                    { "x": 22.47, "y": 0 },
                    { "x": 22.47, "y": 82.64 },
                    { "x": 13.98, "y": 82.47 }
                ]
            },
            {
                nome: "OlharOutroLado",
                destino: "quarto2",
                pontos: [
                    { x: 0, y: 90.98 },
                    { x: 99.93, y: 90.98 },
                    { x: 99.93, y: 100 },
                    { x: 0, y: 100 }
                ]
            }
        ]
    },

    quarto2: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Quarto/Quarto2.png",
        areas: [
            {
                nome: "OlharOutroLado",
                destino: "quarto1",
                pontos: [
                    { x: 0, y: 90.98 },
                    { x: 99.93, y: 90.98 },
                    { x: 99.93, y: 100 },
                    { x: 0, y: 100 }
                ]
            }
        ]
    },

    quarto3: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Quarto/Quarto3.png",
        areas: []
    },

    // ESCRITÓRIO DA MANSÃO
    escritorio1: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Escritorio/Escritorio1.png",
        areas: [
            {
                nome: "VoltarSala1",
                destino: "sala1",
                pontos: [
                    { x: 23.21, y: 14.69 },
                    { x: 33.46, y: 18.2 },
                    { x: 35.36, y: 62.94 },
                    { x: 26.35, y: 59.1 }
                ]
            },
            {
                nome: "OlharOutroLado",
                destino: "escritorio2",
                pontos: [
                    { x: 0, y: 90.98 },
                    { x: 99.93, y: 90.98 },
                    { x: 99.93, y: 100 },
                    { x: 0, y: 100 }
                ]
            }
        ]
    },

    escritorio2: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Escritorio/Escritorio2.png",
        areas: [
            {
                nome: "VoltarCorredor",
                destino: "sala2",
                pontos: [
                    { x: 78.85, y: 23.6 },
                    { x: 81.56,y: 21.06 },
                    { x: 79.22, y: 73.12 },
                    { x: 76.88, y: 72.17 }
                ]
            },
            {
                nome: "OlharOutroLado",
                destino: "escritorio1",
                pontos: [
                    { x: 0, y: 90.98 },
                    { x: 99.93, y: 90.98 },
                    { x: 99.93, y: 100 },
                    { x: 0, y: 100 }
                ]
            },
        ]
    },

    escritorio3: {
        imagem: "The Last Take Cenarios/Mansão Evelyn/Escritorio/Escritorio3.png",
        areas: []
    }

};


// ==========================================
// CENÁRIO INICIAL
// ==========================================

window.cenaAtual = "detetive1";


// ==========================================
// FUNÇÃO PARA MOSTRAR UM CENÁRIO
// ==========================================

window.mostrarCenario = function(nomeCenario) {

    // Procura o cenário na lista
    const cenario = window.cenarios[nomeCenario];

    // Verifica se o cenário existe
    if (!cenario) {
        console.error("Cenário não encontrado:", nomeCenario);
        return;
    }

    // Atualiza o cenário atual
    window.cenaAtual = nomeCenario;

    // Local onde o cenário será exibido
    const telaJogo = document.getElementById("jogo-cenario");

    // Cria o container do cenário
    const container = document.createElement("div");
    container.classList.add("cena-container");

    // Cria a imagem
    const imagem = document.createElement("img");
    imagem.src = cenario.imagem;
    imagem.alt = "Cenário do jogo";
    imagem.classList.add("cena-imagem");

    // Adiciona a imagem ao container
    container.appendChild(imagem);


    // ======================================
    // CRIA AS ÁREAS CLICÁVEIS
    // ======================================

    cenario.areas.forEach((area) => {

        // Cria um botão para a área
        const botao = document.createElement("button");

        botao.type = "button";
        botao.classList.add("area-clique");

        botao.setAttribute("aria-label", area.nome);

        // Transforma os quatro pontos em um polígono
        const formato = area.pontos
            .map(ponto => `${ponto.x}% ${ponto.y}%`)
            .join(", ");

        // O botão ocupa o cenário inteiro,
        // mas só pode ser clicado dentro do polígono.
        botao.style.clipPath = `polygon(${formato})`;

        // Ao clicar, muda para o cenário de destino
        botao.addEventListener("click", () => {

            window.mostrarCenario(area.destino);

        });

        container.appendChild(botao);

    });


    // ======================================
    // ATUALIZA A TELA
    // ======================================

    telaJogo.replaceChildren(container);

    // Avisa o editor que o cenário mudou
    window.dispatchEvent(new Event("cenarioAtualizado"));

};


// ==========================================
// INICIA O JOGO
// ==========================================

window.mostrarCenario(window.cenaAtual);


