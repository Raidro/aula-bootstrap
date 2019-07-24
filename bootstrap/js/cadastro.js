
function cadastrar() {

    // let nome = document.getElementById('nome').value;
    let nome = valida_nome(document.getElementById('nome').value);

    if (nome == false) {
        alert('Insira um nome valido!');
        document.getElementById('nome').focus();
        return;  // o break de uma função é o return ** posso colocar o foco no nome antes do return **

    }

    let fone = document.getElementById('fone').value;
    // let fone = valida_fone(document.getElementById('fone').value);

    let cidade = document.getElementById('cidade').value;

    let sexo = '';

    if (document.getElementById('masc').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('feme').checked) {
        sexo = 'Feminino';

    } else {
        sexo = 'outros';
    }

    insereNaTabela(nome, fone, sexo, cidade); // insere na tabela

    limparFormulario(); // limpa o formulario

}

function limparFormulario() {

    document.getElementById('nome').value = ''; // apaga o que tem em nome deixando ele vazio
    document.getElementById('fone').value = '';// apaga o que tem em fone deixando ele vazio
    document.getElementById('cidade').value = 'selecione';// deixa selecione como selecionado
    document.getElementById('masc').checked = true; // deixa masc como o primeiro
    document.getElementById('nome').focus();// deixa o focu no nome

}

function ehNumero(numero) {
    return !isNaN(numero);
}

function valida_nome(nome) {

    let texto = nome.trim().toUpperCase();

    for (let i = 0; i < texto.length; i++) {

        if (ehNumero(texto[i])) {

            return false;
        }

    }
    return texto;
}

// function valida_fone(texto) {



// }

function insereNaTabela(nome, fone, sexo, cidade) {

    let tabela = document
        .getElementById('lista-contatos')
        .getElementsByTagName('tbody')[0];

    let ultimaLinha = tabela.rows.length;

    let linha = tabela.insertRow(ultimaLinha);

    let campoId = linha.insertCell(0);
    let campoNome = linha.insertCell(1);
    let campoFone = linha.insertCell(2);
    let campoSexo = linha.insertCell(3);
    let campoCidade = linha.insertCell(4);
    let acoes = linha.insertCell(5);

    campoId.innerHTML = ultimaLinha + 1;
    campoNome.innerHTML = nome;
    campoFone.innerHTML = fone;
    campoSexo.innerHTML = sexo;
    campoCidade.innerHTML = cidade;
    acoes.innerHTML = insereBotoesDeAcoes();

}

function insereBotoesDeAcoes() {

    let botaoEditar = '<button type="button" class="btn btn-info btn-sm">';
    botaoEditar += '<i class="fas fa-user-edit" ></i>';
    botaoEditar += '</button>';

    let botaoExcluir = '<button type="button" class="btn btn-danger btn-sm">';
    botaoExcluir += '<i class="fas fa-trash-alt"></i>';
    botaoExcluir += '</button>';

    return botaoEditar + botaoExcluir;
}



