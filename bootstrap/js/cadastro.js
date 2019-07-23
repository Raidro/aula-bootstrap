
function cadastrar() {

    let formulario = [];

    // let nome = document.getElementById('nome').value;
    let nome = valida_nome(document.getElementById('nome').value);
    formulario.push(nome);

    // let fone = document.getElementById('fone').value;
    let fone = valida_fone(document.getElementById('fone').value);
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

function valida_nome(nome) {

    let texto = nome.trim().toUpperCase();

    for (let i = 0; i < texto.length; i++) {

        if (ehNumero(texto[i])) {

            return false;
        }
        return texto;
    }

}

function valida_fone(texto) {



}


