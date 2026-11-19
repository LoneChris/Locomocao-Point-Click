
// ==========================================
// THE LAST TAKE - SISTEMA DE LOCOMOÇÃO COM POO
// ==========================================


// ==========================================
// CLASSE PONTO
// ==========================================

// Representa um ponto de coordenadas X e Y.

class Ponto {

    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

}


// ==========================================
// CLASSE AREA INTERATIVA
// ==========================================

// Representa uma área clicável dentro de um cenário.

class AreaInterativa {

    constructor(nome, destino, pontos) {

        this.nome = nome;
        this.destino = destino;
        this.pontos = pontos;

    }

}


// ==========================================
// CLASSE CENARIO
// ==========================================

// Representa cada cenário do jogo.
// Armazena o caminho da imagem e suas áreas interativas.

class Cenario {

    constructor(imagem, areas = []) {

        this.imagem = imagem;
        this.areas = areas;

    }

}


// ==========================================
// CADASTRO DOS CENÁRIOS
// ==========================================

// Cada cenário é uma instância da classe Cenario.
// Cada área é uma instância da classe AreaInterativa.
// Cada coordenada é uma instância da classe Ponto.

window.cenarios = {

    // ======================================
    // ESCRITÓRIO DO DETETIVE
    // ======================================

    detetive1: new Cenario(
        "The Last Take Cenarios/Escritorio Detetive/Escritorio1.png",

        [

            new AreaInterativa(
                "EntrarEscritorio",
                "detetive2",

                [
                    new Ponto(52.97, 12.17),
                    new Ponto(63.91, 13.86),
                    new Ponto(63.49, 72.38),
                    new Ponto(53.39, 76.93)
                ]
            )

        ]
    ),


    detetive2: new Cenario(
        "The Last Take Cenarios/Escritorio Detetive/Escritorio2.png",

        [

            new AreaInterativa(
                "AproximarMesa",
                "detetive3",

                [
                    new Ponto(28.33, 82.54),
                    new Ponto(68.23, 62.75),
                    new Ponto(91.51, 71.22),
                    new Ponto(54.74, 100)
                ]
            )

        ]
    ),


    detetive3: new Cenario(
        "The Last Take Cenarios/Escritorio Detetive/Escritorio3.png",

        [

            new AreaInterativa(
                "ComeçarCaso",
                "mansaoEntrada",

                [
                    new Ponto(37.66, 17.57),
                    new Ponto(78.18, 41.27),
                    new Ponto(57.45, 75.03),
                    new Ponto(15.73, 29.42)
                ]
            )

        ]
    ),


    // ======================================
    // ENTRADA DA MANSÃO
    // ======================================

    mansaoEntrada: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/MansãoEntrada.png",

        [

            new AreaInterativa(
                "EntrarMansão",
                "sala1",

                [
                    new Ponto(38.07, 42.33),
                    new Ponto(65.83, 42.01),
                    new Ponto(65.83, 70.26),
                    new Ponto(38.13, 70.05)
                ]
            )

        ]
    ),


    // ======================================
    // SALA DA MANSÃO
    // ======================================

    sala1: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Sala/Sala1.png",

        [

            new AreaInterativa(
                "ParaQuarto",
                "quarto1",

                [
                    new Ponto(24.38, 19.47),
                    new Ponto(43.33, 25.4),
                    new Ponto(42.86, 79.68),
                    new Ponto(24.17, 88.36)
                ]
            ),

            new AreaInterativa(
                "ParaCorredor",
                "sala2",

                [
                    new Ponto(73.91, 26.67),
                    new Ponto(83.44, 23.81),
                    new Ponto(83.33, 88.99),
                    new Ponto(72.97, 82.22)
                ]
            )

        ]
    ),


    sala2: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Sala/Sala2.png",

        [

            new AreaInterativa(
                "Escritorio",
                "escritorio2",

                [
                    new Ponto(28.85, 34.39),
                    new Ponto(35.78, 36.4),
                    new Ponto(36.09, 73.65),
                    new Ponto(29.17, 77.35)
                ]
            ),

            new AreaInterativa(
                "SalaDeEstar1",
                "sala3",

                [
                    new Ponto(44.73, 38.9),
                    new Ponto(48.83, 38.06),
                    new Ponto(48.9, 70.78),
                    new Ponto(44.66, 70.45)
                ]
            ),

            new AreaInterativa(
                "SalaDeEstar2",
                "sala4",

                [
                    new Ponto(68.01, 35.73),
                    new Ponto(76.65, 34.39),
                    new Ponto(77.31, 78.13),
                    new Ponto(68.59, 75.63)
                ]
            )

        ]
    ),


    sala3: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Sala/Sala3.png",

        [

            new AreaInterativa(
                "VoltarCorredor",
                "sala2",

                [
                    new Ponto(13.84, 0),
                    new Ponto(22.47, 0),
                    new Ponto(22.47, 82.64),
                    new Ponto(13.98, 82.47)
                ]
            )

        ]
    ),


    sala4: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Sala/Sala4.png",

        [

            new AreaInterativa(
                "OlharOutroLado",
                "sala5",

                [
                    new Ponto(0, 90.98),
                    new Ponto(99.93, 90.98),
                    new Ponto(99.93, 100),
                    new Ponto(0, 100)
                ]
            ),

            new AreaInterativa(
                "VoltarCorredor",
                "sala2",

                [
                    new Ponto(13.84, 0),
                    new Ponto(22.47, 0),
                    new Ponto(22.47, 82.64),
                    new Ponto(13.98, 82.47)
                ]
            )

        ]
    ),


    sala5: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Sala/Sala5.png",

        [

            new AreaInterativa(
                "OlharOutroLado",
                "sala4",

                [
                    new Ponto(0, 90.98),
                    new Ponto(99.93, 90.98),
                    new Ponto(99.93, 100),
                    new Ponto(0, 100)
                ]
            )

        ]
    ),


    // ======================================
    // QUARTOS DA MANSÃO
    // ======================================

    quarto1: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Quarto/Quarto1.png",

        [

            new AreaInterativa(
                "VoltarCorredor",
                "sala1",

                [
                    new Ponto(13.84, 0),
                    new Ponto(22.47, 0),
                    new Ponto(22.47, 82.64),
                    new Ponto(13.98, 82.47)
                ]
            ),

            new AreaInterativa(
                "OlharOutroLado",
                "quarto2",

                [
                    new Ponto(0, 90.98),
                    new Ponto(99.93, 90.98),
                    new Ponto(99.93, 100),
                    new Ponto(0, 100)
                ]
            )

        ]
    ),


    quarto2: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Quarto/Quarto2.png",

        [

            new AreaInterativa(
                "OlharOutroLado",
                "quarto1",

                [
                    new Ponto(0, 90.98),
                    new Ponto(99.93, 90.98),
                    new Ponto(99.93, 100),
                    new Ponto(0, 100)
                ]
            )

        ]
    ),


    quarto3: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Quarto/Quarto3.png",
        []
    ),


    // ======================================
    // ESCRITÓRIO DA MANSÃO
    // ======================================

    escritorio1: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Escritorio/Escritorio1.png",

        [

            new AreaInterativa(
                "VoltarSala1",
                "sala1",

                [
                    new Ponto(23.21, 14.69),
                    new Ponto(33.46, 18.2),
                    new Ponto(35.36, 62.94),
                    new Ponto(26.35, 59.1)
                ]
            ),

            new AreaInterativa(
                "OlharOutroLado",
                "escritorio2",

                [
                    new Ponto(0, 90.98),
                    new Ponto(99.93, 90.98),
                    new Ponto(99.93, 100),
                    new Ponto(0, 100)
                ]
            )

        ]
    ),


    escritorio2: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Escritorio/Escritorio2.png",

        [

            new AreaInterativa(
                "VoltarCorredor",
                "sala2",

                [
                    new Ponto(78.85, 23.6),
                    new Ponto(81.56, 21.06),
                    new Ponto(79.22, 73.12),
                    new Ponto(76.88, 72.17)
                ]
            ),

            new AreaInterativa(
                "OlharOutroLado",
                "escritorio1",

                [
                    new Ponto(0, 90.98),
                    new Ponto(99.93, 90.98),
                    new Ponto(99.93, 100),
                    new Ponto(0, 100)
                ]
            )

        ]
    ),


    escritorio3: new Cenario(
        "The Last Take Cenarios/Mansão Evelyn/Escritorio/Escritorio3.png",
        []
    )

};


// ==========================================
// CLASSE GERENCIADOR DE CENÁRIOS
// ==========================================

// Responsável por controlar a movimentação,
// exibir as imagens e criar as áreas clicáveis.

class GerenciadorCenarios {

    constructor(cenarios, cenarioInicial, elementoId) {

        this.cenarios = cenarios;

        this.cenaAtual = cenarioInicial;

        this.elementoId = elementoId;

    }


    // ======================================
    // MOSTRAR UM CENÁRIO
    // ======================================

    mostrarCenario(nomeCenario) {

        // Procura o cenário solicitado.
        const cenario = this.cenarios[nomeCenario];

        // Verifica se o cenário existe.
        if (!cenario) {

            console.error("Cenário não encontrado:", nomeCenario);

            return;

        }

        // Atualiza o cenário atual.
        this.cenaAtual = nomeCenario;
        window.cenaAtual = nomeCenario;

        // Procura o elemento que exibirá o cenário.
        const telaJogo = document.getElementById(this.elementoId);

        if (!telaJogo) {

            console.error("Elemento do jogo não encontrado:", this.elementoId);

            return;

        }

        // Cria o container do cenário.
        const container = document.createElement("div");

        container.classList.add("cena-container");


        // ==================================
        // CRIAR IMAGEM DO CENÁRIO
        // ==================================

        const imagem = document.createElement("img");

        imagem.src = cenario.imagem;

        imagem.alt = "Cenário do jogo";

        imagem.classList.add("cena-imagem");

        container.appendChild(imagem);


        // ==================================
        // CRIAR ÁREAS CLICÁVEIS
        // ==================================

        cenario.areas.forEach((area) => {

            // Cria um botão para a área.
            const botao = document.createElement("button");

            botao.type = "button";

            botao.classList.add("area-clique");

            botao.setAttribute("aria-label", area.nome);


            // Transforma os pontos em um polígono.
            const formato = area.pontos

                .map(ponto => `${ponto.x}% ${ponto.y}%`)

                .join(", ");


            // Define o formato da área clicável.
            botao.style.clipPath = `polygon(${formato})`;


            // Ao clicar, muda para o cenário de destino.
            botao.addEventListener("click", () => {

                this.mostrarCenario(area.destino);

            });


            container.appendChild(botao);

        });


        // ==================================
        // ATUALIZAR A TELA
        // ==================================

        telaJogo.replaceChildren(container);


        // Avisa outros sistemas que o cenário mudou.
        // Isso mantém a comunicação com o editor de áreas.

        window.dispatchEvent(new Event("cenarioAtualizado"));

    }

}


// ==========================================
// INICIALIZAÇÃO DO SISTEMA
// ==========================================

// Cria uma instância do gerenciador de cenários.

const gerenciadorCenarios = new GerenciadorCenarios(

    window.cenarios,

    "detetive1",

    "jogo-cenario"

);


// Mantém as variáveis globais para compatibilidade
// com outros arquivos do projeto.

window.cenaAtual = gerenciadorCenarios.cenaAtual;


// Mantém a função global mostrarCenario.
// Assim, outros arquivos podem continuar chamando
// window.mostrarCenario(nomeCenario).

window.mostrarCenario = function(nomeCenario) {

    gerenciadorCenarios.mostrarCenario(nomeCenario);

    window.cenaAtual = gerenciadorCenarios.cenaAtual;

};


// ==========================================
// INICIA O JOGO
// ==========================================

window.mostrarCenario(window.cenaAtual);
