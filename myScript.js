let vinhos = [
    { tipo: 'Tinto', quantidade: [] },
    { tipo: 'Branco', quantidade: [] },
    { tipo: 'Rosé', quantidade: [] }
]

let total = 0;

function addVinho() {
    const tipoVinho = document.getElementById('tipoVinho').value;
    const qtd = parseInt(document.getElementById('quantidade').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, digite uma quantidade válida')
        return;
    }

    switch (tipoVinho) {
        case "T":
            vinhos[0].quantidade.push(qtd)
            break;
        case "B":
            vinhos[1].quantidade.push(qtd)
            break;
        case "R":
            vinhos[2].quantidade.push(qtd)
            break;
        default:
            alert("Não foi possível executar a ação.");
            return;
    }
    total += qtd;
    exibir();
}

function somarVinho(i) {
    return vinhos[i].quantidade.reduce(function (soma, qtdLista) {
        return soma + qtdLista
    }, 0)
}
function calcularPorcentagem(i) {
    const totalPorTipo = somarVinho(i)
    let porcentagem;
    if (total > 0) {
        porcentagem = ((totalPorTipo / total) * 100).toFixed(1);
    } else {
        porcentagem = 0;
    }

    return porcentagem;
}

function exibir() {
    const campoExibir = document.getElementById('exibir');
    const botaoAlterar = document.getElementById('botaoAlterar');
    let resultado = '';

    for (let i = 0; i < vinhos.length; i++) {
        const vinho = vinhos[i];
        const totalPorTipo = somarVinho(i);
        const porcentagem = calcularPorcentagem(i);
        resultado += `<h3>Vinho ${vinho.tipo}</h3>Lista: [${vinho.quantidade}]<br>Total: ${totalPorTipo}<br>Porcentagem: ${porcentagem}% do total de ${total} garrafa(s)<br>`;
    }
    botaoAlterar.style.display = 'block';
    campoExibir.innerHTML = resultado; 
}

function alterarVinho() {
    const posicao = parseInt(document.getElementById('posicao').value);
    const novoTipoVinho = document.getElementById('novoTipoVinho').value;



    if (isNaN(posicao) || posicao < 0 || posicao >= vinhos.length) {
        alert('Digite uma posição válida (0 para Tinto, 1 para Branco, 2 para Rosé)');
        return;
    }


    switch (novoTipoVinho) {
        case "T":
            vinhos[posicao].tipo ='Tinto'
            break;
        case "B":
            vinhos[posicao].tipo ='Branco'
            break;
        case "R":
            vinhos[posicao].tipo = 'Rosé';
            break;
        default:
            alert("Não foi possível executar a ação.");
            return;
    }

    exibir();
    alert('Tipo de vinho alterado com sucesso!');
}

function finalizar() {
    const caixaFormulario = document.getElementById('caixaFormulario');
    const containerAlterar = document.getElementById('containerAlterar');
    const botaoAlterar = document.getElementById('botaoAlterar');

    alert('Inserção de dados finalizada. Estoque:');
    exibir();

    caixaFormulario.style.display = 'none';
    containerAlterar.style.display = 'none';
    botaoAlterar.style.display = 'none';

}
