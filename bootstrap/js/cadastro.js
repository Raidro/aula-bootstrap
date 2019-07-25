
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
        sexo = 'Outros';
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

    let ultimaLinha = tabela.rows.length; // se refere a ultima linha que eu cliquei

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
    acoes.innerHTML = insereBotoesDeAcoes(ultimaLinha + 1);

}

function insereBotoesDeAcoes(id) {

    let botaoEditar = '<button type="button" onclick="editaTabela(' + id + ')" class="btn btn-info btn-sm">';
    botaoEditar += '<i class="fas fa-user-edit" ></i>';
    botaoEditar += '</button>';

    let botaoExcluir = '<button type="button" class="btn btn-danger btn-sm">';//interpolação de strings
    botaoExcluir += '<i class="fas fa-trash-alt"></i>';
    botaoExcluir += '</button>';

    return botaoEditar + botaoExcluir; // soma os botões de editar e excluir para que aparecam juntos 
}

function editaTabela(id) { // pega o pelo id

    let tabela = document
        .getElementById('lista-contatos') //pega o id list-contatos
        .getElementsByTagName('tbody')[0];//e as informações do tbody[0]
    let linhas = tabela.rows.length; // estou pegando o tamanho da linha escolhida 

    // ======== inicio do for ========//

    for (let i = 0; i < linhas; i++) {
        if (tabela.rows[i].cells[0].innerHTML == id) {

            // ========  inicio do input oculto =======//
            let inputId = document.getElementById('id'); //está pegando a informação do id
            inputId = tabela.rows[i].cells[0].innerHTML;// está colocando o valor do id no id oculto
            // ======== fim do input oculto ========//

            // ========  inicio do input Nome =======//
            let inputNome = document.getElementById('nome');//pegando todos os atributos do nome
            inputNome.value = tabela.rows[i].cells[1].innerHTML;//aqui, eu estou pegando do atributo inputNome, o valor dele ecolocando o que esta na celula 1 da tabela ;
            // ======== fim do input cidade ========//

            // ========  inicio do input Fone =======//
            let inputFone = document.getElementById('fone')//pegando todos os atributos do fone
            inputFone.value = tabela.rows[i].cells[2].innerHTML;// o innerHTML pega a informação entre as tags
            // ======== fim do input cidade ========//

            /* ===== Inicio do if do inputSexo ==== */
            let inputSexo = tabela.rows[i].cells[3].innerHTML;
            //console.log(inputSexo);

            if (inputSexo == 'Masculino') { //verifica se o texto entre as tags é maculino

                document.getElementById('masc').checked = true;// se for masculino, ele coloca a tag masc.checked como verdadeiro(deixa marcado)

            } else if (inputSexo == 'Feminino') {//verifica se o texto entre as tags é feminino

                document.getElementById('feme').checked = true;// se for feminino, ele coloca a tag feme.checked como verdadeiro(deixa marcado)

            } else {//se não for nem masculino e nem feminino

                document.getElementById('outros').checked = true;// ele coloca a tag outros.checked como verdadeiro(deixa marcado)
            }
            /* =============================== */

            // ========  inicio do input cidade =======//
            let inputCidade = document.getElementById('cidade')
            inputCidade.value = tabela.rows[i].cells[4].innerHTML;//innerHTML retorna o texto entre as tags:ex: <td>Esse é o texto que será pego</td>
            // ======== fim do input cidade ========//
            return;
        }
    }
    // ======== fim do for ========//
}



