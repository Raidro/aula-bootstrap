
function cadastrar() {

    let formulario = [];

    // let nome = document.getElementById('nome').value;
    let nome = valida_nome(document.getElementById('nome').value);

    if (nome == false) {
        alert('Insira um nome valido!');
        document.getElementById('nome').focus();
        return;  // o break de uma função é o return ** posso colocar o foco no nome antes do return **

    }

    formulario.push(nome);

    let fone = document.getElementById('fone').value;
    // let fone = valida_fone(document.getElementById('fone').value);
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


