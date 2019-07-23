
function cadastrar() {

    let formulario = [];

    // let nome = document.getElementById('nome').value;
    let nome = valida_nome(document.getElementById('nome').value);
    formulario.push(nome);

    let fone = document.getElementById('fone').value;
    formulario.push(fone);

    let cidade = document.getElementById('cidade').value;
    formulario.push(cidade);



    let sexo = '';
    if (document.getElementById('masc').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('feme').checked) {
        sexo = 'Feminino';

    } else {
        sexo = 'outros';
    }

    formulario.push(sexo);

    console.log(formulario);

    limparFormulario();

}

function limparFormulario() {

    document.getElementById('nome').value = '';
    document.getElementById('fone').value = '';
    document.getElementById('cidade').value = 'selecione';
    document.getElementById('masc').checked = true;
    document.getElementById('nome').focus();

}

function ehNumero(numero) {
    return !isNaN(numero);
}

function valida_nome(texto) {

    return ehNumero(texto) ? nome : false;

    // if (ehNumero(texto)) {
    //     return nome;

    // } else {
    //     return false;
    // }
}


