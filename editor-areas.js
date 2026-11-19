// ==========================================
// THE LAST TAKE - EDITOR DE ÁREAS COM POO
// ==========================================


// ==========================================
// CLASSE PAINEL EDITOR
// ==========================================

// Responsável por criar e controlar a interface
// visual do editor de áreas.

class PainelEditor {

    constructor() {

        // Cria o painel principal.
        this.painel = document.createElement("div");

        this.painel.id = "painel-editor";


        // Conteúdo visual do painel.
        this.painel.innerHTML = `

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


        // Adiciona o painel ao documento.
        document.body.appendChild(this.painel);


        // Guarda referências aos elementos do painel.
        this.seletor = this.painel.querySelector("#seletor-areas");

        this.botaoNovaArea = this.painel.querySelector("#botao-nova-area");

        this.botaoCopiar = this.painel.querySelector("#botao-copiar");

        this.coordenadas = this.painel.querySelector("#coordenadas-pontos");

        this.mensagem = this.painel.querySelector("#mensagem-editor");

    }


    // ======================================
    // MOSTRAR E ESCONDER PAINEL
    // ======================================

    mostrar() {

        this.painel.style.display = "block";

    }


    esconder() {

        this.painel.style.display = "none";

    }


    // ======================================
    // ATUALIZAR LISTA DE ÁREAS
    // ======================================

    atualizarListaAreas(areas, areaSelecionada) {

        this.seletor.innerHTML = "";

        areas.forEach((area, indice) => {

            const opcao = document.createElement("option");

            opcao.value = indice;

            opcao.textContent = area.nome;

            this.seletor.appendChild(opcao);

        });


        if (areas.length > 0) {

            this.seletor.value = areaSelecionada;

        }

    }


    // ======================================
    // ATUALIZAR COORDENADAS
    // ======================================

    atualizarCoordenadas(area) {

        if (!area) {

            this.coordenadas.textContent = "Nenhuma área selecionada.";

            return;

        }


        this.coordenadas.innerHTML = "";


        area.pontos.forEach((ponto, indice) => {

            const linha = document.createElement("p");

            linha.textContent =
                `P${indice + 1}: X = ${ponto.x}% | Y = ${ponto.y}%`;

            this.coordenadas.appendChild(linha);

        });

    }


    // ======================================
    // MOSTRAR MENSAGEM
    // ======================================

    mostrarMensagem(texto) {

        this.mensagem.textContent = texto;

    }

}


// ==========================================
// CLASSE MANIPULADOR DE ÁREAS
// ==========================================

// Responsável por criar e localizar as áreas
// interativas dentro dos cenários.

class ManipuladorAreas {

    // ======================================
    // OBTER ÁREA SELECIONADA
    // ======================================

    obterAreaAtual(cenario, areaSelecionada) {

        if (!cenario || cenario.areas.length === 0) {

            return null;

        }

        return cenario.areas[areaSelecionada] || null;

    }


    // ======================================
    // CRIAR UMA NOVA ÁREA
    // ======================================

    adicionarNovaArea(cenario, nome, destino) {

        // Cria uma área utilizando a classe
        // AreaInterativa do movimentacao.js.

        const novaArea = new AreaInterativa(

            nome,

            destino,

            [

                new Ponto(30, 30),

                new Ponto(70, 30),

                new Ponto(70, 70),

                new Ponto(30, 70)

            ]

        );


        // Adiciona a nova área ao cenário.
        cenario.areas.push(novaArea);


        // Retorna a posição da área criada.
        return cenario.areas.length - 1;

    }

}


// ==========================================
// CLASSE MANIPULADOR DE PONTOS
// ==========================================

// Responsável por desenhar os pontos,
// controlar o arraste e atualizar as coordenadas.

class ManipuladorPontos {

    constructor(painelEditor) {

        this.painelEditor = painelEditor;

        // Guarda o índice do ponto arrastado.
        this.pontoArrastado = null;

    }


    // ======================================
    // DESENHAR OS PONTOS NA TELA
    // ======================================

    desenhar(container, area) {

        if (!container) return;


        // Remove a camada anterior, se existir.
        const camadaAntiga = document.getElementById("camada-editor");

        if (camadaAntiga) {

            camadaAntiga.remove();

        }


        // Verifica se existe uma área selecionada.
        if (!area) {

            this.painelEditor.atualizarCoordenadas(null);

            return;

        }


        // Cria a camada que ficará sobre o cenário.
        const camada = document.createElement("div");

        camada.id = "camada-editor";


        // ==================================
        // PRÉ-VISUALIZAÇÃO DA ÁREA
        // ==================================

        const previa = document.createElement("div");

        previa.classList.add("area-editor-preview");


        // Transforma as coordenadas em um polígono.
        previa.style.clipPath = `polygon(${

            area.pontos

                .map(ponto => `${ponto.x}% ${ponto.y}%`)

                .join(", ")

        })`;


        camada.appendChild(previa);


        // ==================================
        // CRIAR OS MARCADORES
        // ==================================

        area.pontos.forEach((ponto, indice) => {

            const marcador = document.createElement("div");

            marcador.classList.add("ponto-editor");

            marcador.textContent = `P${indice + 1}`;


            // Posiciona o marcador.
            marcador.style.left = ponto.x + "%";

            marcador.style.top = ponto.y + "%";


            // ==================================
            // INICIAR ARRASTE
            // ==================================

            marcador.addEventListener("pointerdown", (evento) => {

                evento.preventDefault();

                evento.stopPropagation();


                // Guarda qual ponto está sendo arrastado.
                this.pontoArrastado = indice;


                // Mantém o controle do ponteiro.
                marcador.setPointerCapture(evento.pointerId);

            });


            // ==================================
            // MOVIMENTAR PONTO
            // ==================================

            marcador.addEventListener("pointermove", (evento) => {

                if (this.pontoArrastado !== indice) return;


                this.moverPonto(evento, container, area, camada);

            });


            // ==================================
            // FINALIZAR ARRASTE
            // ==================================

            marcador.addEventListener("pointerup", () => {

                this.pontoArrastado = null;

            });


            marcador.addEventListener("pointercancel", () => {

                this.pontoArrastado = null;

            });


            camada.appendChild(marcador);

        });


        // Adiciona a camada ao cenário.
        container.appendChild(camada);


        // Atualiza as coordenadas exibidas.
        this.painelEditor.atualizarCoordenadas(area);

    }


    // ======================================
    // MOVIMENTAR UM PONTO
    // ======================================

    moverPonto(evento, container, area, camada) {

        if (!area || this.pontoArrastado === null) return;


        // Descobre o tamanho e a posição do cenário.
        const retangulo = container.getBoundingClientRect();


        // Converte a posição do mouse para porcentagem.
        let x = (

            (evento.clientX - retangulo.left) /

            retangulo.width

        ) * 100;


        let y = (

            (evento.clientY - retangulo.top) /

            retangulo.height

        ) * 100;


        // Impede que o ponto saia dos limites da imagem.
        x = Math.max(0, Math.min(100, x));

        y = Math.max(0, Math.min(100, y));


        // Atualiza as coordenadas do objeto Ponto.
        const ponto = area.pontos[this.pontoArrastado];

        ponto.x = Number(x.toFixed(2));

        ponto.y = Number(y.toFixed(2));


        // ==================================
        // ATUALIZAR MARCADORES
        // ==================================

        const marcadores = camada.querySelectorAll(".ponto-editor");

        marcadores.forEach((marcador, indice) => {

            marcador.style.left = area.pontos[indice].x + "%";

            marcador.style.top = area.pontos[indice].y + "%";

        });


        // ==================================
        // ATUALIZAR PRÉ-VISUALIZAÇÃO
        // ==================================

        const previa = camada.querySelector(".area-editor-preview");

        if (previa) {

            previa.style.clipPath = `polygon(${

                area.pontos

                    .map(ponto => `${ponto.x}% ${ponto.y}%`)

                    .join(", ")

            })`;

        }


        // Atualiza os números das coordenadas.
        this.painelEditor.atualizarCoordenadas(area);

    }


    // ======================================
    // FINALIZAR MOVIMENTAÇÃO
    // ======================================

    finalizarMovimento() {

        this.pontoArrastado = null;

    }

}


// ==========================================
// CLASSE EDITOR DE ÁREAS
// ==========================================

// Responsável por coordenar o editor,
// conectar as outras classes e controlar os eventos.

class EditorAreas {

    constructor() {

        // Estado do editor.
        this.editorAtivo = false;

        // Índice da área selecionada.
        this.areaSelecionada = 0;


        // Cria os componentes do editor.
        this.painel = new PainelEditor();

        this.manipuladorAreas = new ManipuladorAreas();

        this.manipuladorPontos = new ManipuladorPontos(this.painel);


        // Configura os eventos.
        this.configurarEventos();

    }


    // ======================================
    // OBTER CENÁRIO ATUAL
    // ======================================

    obterCenarioAtual() {

        return window.cenarios[window.cenaAtual];

    }


    // ======================================
    // OBTER ÁREA ATUAL
    // ======================================

    obterAreaAtual() {

        const cenario = this.obterCenarioAtual();

        return this.manipuladorAreas.obterAreaAtual(

            cenario,

            this.areaSelecionada

        );

    }


    // ======================================
    // ATUALIZAR LISTA DE ÁREAS
    // ======================================

    atualizarListaAreas() {

        const cenario = this.obterCenarioAtual();

        if (!cenario) return;


        // Impede que a seleção ultrapasse
        // a quantidade de áreas existentes.

        if (cenario.areas.length > 0) {

            this.areaSelecionada = Math.min(

                this.areaSelecionada,

                cenario.areas.length - 1

            );

        } else {

            this.areaSelecionada = 0;

        }


        this.painel.atualizarListaAreas(

            cenario.areas,

            this.areaSelecionada

        );

    }


    // ======================================
    // DESENHAR PONTOS
    // ======================================

    desenharPontos() {

        const container = document.querySelector(".cena-container");

        if (!container) return;


        const area = this.obterAreaAtual();


        this.manipuladorPontos.desenhar(

            container,

            area

        );

    }


    // ======================================
    // ADICIONAR NOVA ÁREA
    // ======================================

    adicionarNovaArea() {

        const cenario = this.obterCenarioAtual();

        if (!cenario) return;


        // Solicita o nome da nova área.
        const nome = prompt("Digite um nome para esta área:");


        // Verifica se o nome foi preenchido.
        if (!nome || nome.trim() === "") {

            return;

        }


        // Cria a área utilizando o manipulador.
        this.areaSelecionada = this.manipuladorAreas.adicionarNovaArea(

            cenario,

            nome.trim(),

            window.cenaAtual

        );


        // Atualiza a interface.
        this.atualizarListaAreas();

        this.desenharPontos();


        this.painel.mostrarMensagem(

            "Nova área criada! Ajuste os pontos amarelos."

        );

    }


    // ======================================
    // COPIAR CÓDIGO DA ÁREA
    // ======================================

    async copiarCodigoArea() {

        const area = this.obterAreaAtual();


        if (!area) {

            alert("Crie ou selecione uma área primeiro.");

            return;

        }


        // Converte o objeto em código JavaScript.
        const codigo = JSON.stringify(area, null, 4) + ",";


        try {

            // Tenta copiar utilizando a API do navegador.
            await navigator.clipboard.writeText(codigo);


            this.painel.mostrarMensagem(

                "Código copiado! Cole dentro de areas no movimentacao.js."

            );

        } catch (erro) {

            // Alternativa caso a cópia seja bloqueada.
            const campo = document.createElement("textarea");

            campo.value = codigo;

            document.body.appendChild(campo);

            campo.select();


            const copiado = document.execCommand("copy");

            campo.remove();


            if (copiado) {

                this.painel.mostrarMensagem(

                    "Tentativa de cópia realizada. Confira o código no movimentacao.js."

                );

            } else {

                this.painel.mostrarMensagem(

                    "Não foi possível copiar automaticamente."

                );

            }

        }

    }


    // ======================================
    // ABRIR E FECHAR EDITOR
    // ======================================

    alternarEditor() {

        this.editorAtivo = !this.editorAtivo;


        if (this.editorAtivo) {

            // Abre o editor.
            this.painel.mostrar();

            this.areaSelecionada = 0;

            this.atualizarListaAreas();

            this.desenharPontos();

        } else {

            // Fecha o editor.
            this.painel.esconder();

            this.manipuladorPontos.finalizarMovimento();


            // Remove os pontos e atualiza
            // as áreas clicáveis do cenário.

            window.mostrarCenario(window.cenaAtual);

        }

    }


    // ======================================
    // SELECIONAR ÁREA
    // ======================================

    selecionarArea(indice) {

        this.areaSelecionada = indice;

        this.desenharPontos();

    }


    // ======================================
    // CONFIGURAR EVENTOS
    // ======================================

    configurarEventos() {


        // ==================================
        // BOTÃO NOVA ÁREA
        // ==================================

        this.painel.botaoNovaArea.addEventListener("click", () => {

            this.adicionarNovaArea();

        });


        // ==================================
        // BOTÃO COPIAR CÓDIGO
        // ==================================

        this.painel.botaoCopiar.addEventListener("click", () => {

            this.copiarCodigoArea();

        });


        // ==================================
        // SELETOR DE ÁREAS
        // ==================================

        this.painel.seletor.addEventListener("change", (evento) => {

            this.selecionarArea(Number(evento.target.value));

        });


        // ==================================
        // TECLA E
        // ==================================

        document.addEventListener("keydown", (evento) => {

            // Ignora a tecla se o usuário estiver digitando.
            if (

                evento.target.tagName === "INPUT" ||

                evento.target.tagName === "TEXTAREA" ||

                evento.target.tagName === "SELECT"

            ) {

                return;

            }


            if (evento.key.toLowerCase() === "e") {

                this.alternarEditor();

            }

        });


        // ==================================
        // QUANDO O CENÁRIO MUDA
        // ==================================

        window.addEventListener("cenarioAtualizado", () => {

            if (!this.editorAtivo) return;


            // Reinicia a seleção de área.
            this.areaSelecionada = 0;


            // Atualiza a lista e os pontos.
            this.atualizarListaAreas();

            this.desenharPontos();

        });

    }

}


// ==========================================
// INICIALIZAÇÃO DO EDITOR
// ==========================================

// Cria uma instância da classe EditorAreas.
// A partir daqui, o editor estará preparado
// para receber os comandos do jogador.

window.editorAreas = new EditorAreas();
