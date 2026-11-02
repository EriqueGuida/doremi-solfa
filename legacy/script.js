// ============================================================
// PREÇOS DOS PRODUTOS
// ============================================================

const precosProdutos = {
    cama1: 325.00,
    cama2: 470.00,
    cama3: 680.00,
    cama4: 1900.00,

    sofa1: 1200.00,
    sofa2: 1500.00,
    sofa3: 1800.00,
    sofa4: 2100.00
};


// ============================================================
// VETOR DOS SOFÁS
// ============================================================
// A AD2 exige que cada sofá tenha:
// número de lugares, tipo, dimensões, tecido,
// nome do arquivo da imagem e preço.
//
// Os dados abaixo devem ser conferidos com o Sofa.html
// antes da entrega final.
// ============================================================

const sofas = [
    {
        lugares: 2,
        tipo: "Retrátil",
        dimensoes: "95 x 87-126 x 180 (AxPxL)",
        tecido: "Linho Cru",
        imagem: "imagens/Sofa2lugRetratil150.png",
        preco: 765.00
    },

    {
        lugares: 2,
        tipo: "Sofá-Cama",
        dimensoes: "95 x 97-150 x 180 (AxPxL)",
        tecido: "Linho",
        imagem: "imagens/SofaCama2lug150.png",
        preco: 4160.00
    },

    {
        lugares: 3,
        tipo: "Retrátil",
        dimensoes: "108 x 95-155 x 200 (AxPxL)",
        tecido: "Suede",
        imagem: "imagens/Sofa3lugRetratil150.png",
        preco: 1900.00
    },

    {
        lugares: 3,
        tipo: "Retrô",
        dimensoes: "90 x 76 x 196 (AxPxL)",
        tecido: "Veludo",
        imagem: "imagens/Sofa3lugRetro150.png",
        preco: 1200.00
    }
];


// ============================================================
// FUNÇÃO AUXILIAR - INICIALIZAÇÃO DA PÁGINA
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------------------------------
    // ELEMENTOS DA LISTA DE COMPRAS
    // --------------------------------------------------------

    const selProduto = document.getElementById("selProduto");
    const btnIncluir = document.getElementById("btnIncluir");
    const lisPedArea = document.getElementById("lisPedArea");
    const inputValor = document.getElementById("valor");

    // --------------------------------------------------------
    // ELEMENTOS DE SENHA
    // --------------------------------------------------------

    const campoSenha = document.getElementById("senhaCad");

    const campoConfirma =
        document.getElementById("confirmaSenha") ||
        document.getElementById("confirme");

    // --------------------------------------------------------
    // FORMULÁRIO
    // --------------------------------------------------------

    const form = document.querySelector(".FormBox");


    // ========================================================
    // QUESTÃO 4 - LISTA DE COMPRAS
    // ========================================================

    if (selProduto && btnIncluir && lisPedArea && inputValor) {

        btnIncluir.addEventListener("click", function () {

            // Verifica se existe algum produto selecionado.
            if (
                selProduto.selectedIndex === -1 ||
                selProduto.value === ""
            ) {
                alert(
                    "Por favor, selecione um produto na lista antes de incluir."
                );

                return;
            }

            const optionSelecionada =
                selProduto.options[selProduto.selectedIndex];

            const idProduto = selProduto.value;
            const descricaoProduto = optionSelecionada.text;

            const preco = precosProdutos[idProduto];

            // Verifica se o produto possui preço cadastrado.
            if (preco === undefined) {
                alert("O preço deste produto não está cadastrado.");
                return;
            }

            // ------------------------------------------------
            // Adiciona o produto à lista de compras.
            // \n cria uma nova linha no textarea.
            // ------------------------------------------------

            if (lisPedArea.value !== "") {
                lisPedArea.value += "\n";
            }

            lisPedArea.value += descricaoProduto;


            // ------------------------------------------------
            // Soma o preço ao valor acumulado.
            // ------------------------------------------------

            const valorAtual =
                parseFloat(inputValor.value.replace(",", ".")) || 0;

            const novoValor = valorAtual + preco;

            inputValor.value = novoValor.toFixed(2);


            // ------------------------------------------------
            // Volta a Combo Box para o estado inicial.
            // ------------------------------------------------

            selProduto.selectedIndex = 0;
        });


        // ====================================================
        // BOTÃO RESET
        // ====================================================

        if (form) {

            form.addEventListener("reset", function () {

                // O navegador faz o reset dos elementos.
                // Este trecho garante que os campos
                // calculados também sejam limpos.

                if (lisPedArea) {
                    lisPedArea.value = "";
                }

                if (inputValor) {
                    inputValor.value = "";
                }

                if (selProduto) {
                    selProduto.selectedIndex = 0;
                }
            });
        }
    }


    // ========================================================
    // QUESTÃO 3 - CRÍTICA DE CAMPO
    // ========================================================
    // A verificação é realizada quando o valor do campo
    // é alterado.
    //
    // A AD2 determina que:
    // - se um campo estiver vazio, não deve haver alerta;
    // - se os dois estiverem preenchidos e forem diferentes,
    //   deve aparecer um alerta.
    // ========================================================

    if (campoSenha) {
        campoSenha.addEventListener("change", function () {
            validarSenha();
        });
    }

    if (campoConfirma) {
        campoConfirma.addEventListener("change", function () {
            validarSenha();
        });
    }
});


// ============================================================
// QUESTÃO 1 - JANELA DAS CAMAS
// ============================================================

function abrirJanelaCama(tipo, estilo, imagem, dimensoes, preco) {

    // Converte o caminho relativo da imagem para uma URL
    // absoluta baseada na página que está sendo executada.
    const imagemURL = new URL(imagem, window.location.href).href;

    const largura = 400;
    const altura = 500;

    const esquerda = (screen.width - largura) / 2;
    const topo = (screen.height - altura) / 2;

    const janela = window.open(
        "",
        "_blank",
        "width=" + largura +
        ",height=" + altura +
        ",top=" + topo +
        ",left=" + esquerda +
        ",scrollbars=no,resizable=no"
    );

    if (!janela) {
        alert(
            "Não foi possível abrir a janela do produto. " +
            "Verifique se o navegador está bloqueando pop-ups."
        );
        return;
    }

    const htmlContent = `
        <!DOCTYPE html>

        <html lang="pt-BR">

        <head>

            <meta charset="UTF-8">

            <title>${tipo} - ${estilo}</title>

            <style>

                body {
                    background-color: #E6F0B5;
                    color: #E53646;
                    font-family: Stoke, "Lucida Bright", serif;
                    text-align: center;
                    margin: 0;
                    padding: 20px;
                }

                h2 {
                    font-size: 22px;
                    margin-bottom: 5px;
                }

                h3 {
                    font-size: 18px;
                    font-weight: normal;
                    margin-top: 0;
                    margin-bottom: 20px;
                }

                img {
                    width: 150px;
                    height: 150px;
                    object-fit: contain;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                }

                p {
                    font-size: 16px;
                    margin: 8px 0;
                }

                button {
                    margin-top: 15px;
                    padding: 4px 12px;
                    font-size: 14px;
                    cursor: pointer;
                }

            </style>

        </head>

        <body>

            <h2>${tipo}</h2>

            <h3>${estilo}</h3>

            <img
                src="${imagemURL}"
                alt="${tipo} ${estilo}"
            >

            <p>
                ${dimensoes}
            </p>

            <p>
                <strong>
                    Preço: R$ ${preco}
                </strong>
            </p>

            <button onclick="window.close()">
                Fechar
            </button>

        </body>

        </html>
    `;

    janela.document.open();
    janela.document.write(htmlContent);
    janela.document.close();
}


// ============================================================
// QUESTÃO 1 - MODAL ALTERNATIVO
// ============================================================
// Mantido porque já fazia parte do seu código.
// ============================================================

function abrirModal(categoria, tipo, dimensoes, preco, imagemSrc) {

    const modalCategoria =
        document.getElementById("modalCategoria");

    const modalTipo =
        document.getElementById("modalTipo");

    const modalDimensoes =
        document.getElementById("modalDimensoes");

    const modalPreco =
        document.getElementById("modalPreco");

    const modalImagem =
        document.getElementById("modalImagem");

    const modalDetalhes =
        document.getElementById("modalDetalhes");


    if (
        !modalCategoria ||
        !modalTipo ||
        !modalDimensoes ||
        !modalPreco ||
        !modalImagem ||
        !modalDetalhes
    ) {
        return;
    }


    modalCategoria.innerText = categoria;

    modalTipo.innerText = tipo;

    modalDimensoes.innerText = dimensoes;

    modalPreco.innerText = "Preço: " + preco;

    modalImagem.src = imagemSrc;

    modalDetalhes.style.display = "flex";
}


function fecharModal() {

    const modalDetalhes =
        document.getElementById("modalDetalhes");

    if (modalDetalhes) {
        modalDetalhes.style.display = "none";
    }
}


// ============================================================
// QUESTÃO 3 - VALIDAÇÃO DAS SENHAS
// ============================================================

function validarSenha(event) {

    const campoSenha =
        document.getElementById("senhaCad");

    const campoConfirma =
        document.getElementById("confirmaSenha") ||
        document.getElementById("confirme");


    // Se os campos não existirem nesta página,
    // não há nada para validar.

    if (!campoSenha || !campoConfirma) {
        return true;
    }


    const senha = campoSenha.value;

    const confirma = campoConfirma.value;


    // --------------------------------------------------------
    // Se um dos campos estiver vazio:
    // NÃO deve emitir alerta.
    // --------------------------------------------------------

    if (senha === "" || confirma === "") {
        return true;
    }


    // --------------------------------------------------------
    // Se os dois estiverem preenchidos e forem diferentes:
    // mostra alerta e impede o envio quando apropriado.
    // --------------------------------------------------------

    if (senha !== confirma) {

        alert("Senhas estão diferentes!");

        if (event) {
            event.preventDefault();
        }

        return false;
    }


    // --------------------------------------------------------
    // Senhas iguais.
    // --------------------------------------------------------

    return true;
}


// ============================================================
// QUESTÃO 3 - CRÍTICA DO FORMULÁRIO
// ============================================================
// Esta função pode ser utilizada no onSubmit:
//
// onsubmit="return criticarFormulario();"
//
// ============================================================

function criticarFormulario() {

    return validarSenha();
}


// ============================================================
// QUESTÃO 2 - EXIBIÇÃO DO SOFÁ
// ============================================================

function mostrarSofa(
    nome,
    tipo,
    imagem,
    tecido,
    tamanho,
    preco
) {

    const sofaNome =
        document.getElementById("sofaNome");

    const sofaTipo =
        document.getElementById("sofaTipo");

    const sofaImg =
        document.getElementById("sofaImg");

    const sofaTecido =
        document.getElementById("sofaTecido");

    const sofaTamanho =
        document.getElementById("sofaTamanho");

    const sofaPreco =
        document.getElementById("sofaPreco");


    // --------------------------------------------------------
    // Verifica se os elementos existem.
    // --------------------------------------------------------

    if (
        !sofaNome ||
        !sofaTipo ||
        !sofaImg ||
        !sofaTecido ||
        !sofaTamanho ||
        !sofaPreco
    ) {
        return;
    }


    sofaNome.innerText = nome;

    sofaTipo.innerHTML =
        "<strong>" + tipo + "</strong>";

    sofaImg.src = imagem;

    sofaImg.alt =
        nome + " " + tipo;

    sofaTecido.innerText =
        "Tecido: " + tecido;

    sofaTamanho.innerText =
        "Tamanho: " + tamanho;

    sofaPreco.innerHTML =
        'Preço: <span class="preco">R$ ' +
        preco +
        "</span>";
}