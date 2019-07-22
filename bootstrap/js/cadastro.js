
function cadastrar() {

    let formulario = [];

    let nome = document.getElementById('nome').value;
    formulario.push(nome);

    let fone = document.getElementById('fone').value;
    formulario.push(fone);

    let cidade = document.getElementById('cidade').value;
    formulario.push(cidade);

    console.log(formulario);

    let sexo = '';
    if (document.getElementById('masc').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('feme').checked) {
        sexo = 'Feminino';

    } else {
        sexo = 'outros';
    }



}