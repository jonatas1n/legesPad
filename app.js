let capButton = document.getElementsByClassName('add-cap');
let items = document.getElementsByClassName('artigo');
// const artigo = new RegExp("Art. [0-9]{1,}o");

capButton = capButton[0];

let capitulo = document.createElement('div');
capitulo.classList.add('capitulo');
capitulo.contentEditable = "false";

let titulo = document.createElement('div');
titulo.classList.add('titulo');
titulo.contentEditable = "false";

let subtitulo = document.createElement('div');
subtitulo.classList.add('subtitulo');
subtitulo.innerHTML = "DISPOSIÇÕES PRELIMINARES";

capitulo.appendChild(titulo);
capitulo.appendChild(subtitulo);

if (document.getElementsByClassName('capitulo').length == 0){
    document.getElementsByClassName('corpo')[0].appendChild(capitulo);
}

let titulos = document.getElementsByClassName('titulo')
for (let i = 0; i < titulos.length; i++){
    titulos[i].innerHTML = "Capitulo " + titulos.length;
}

let divBaseAbrev = document.createElement('div');
// divBaseAbrev.classList.add('abrev-artigo');
// divBaseAbrev.contentEditable = "false";

let divBaseConteudo = document.createElement('div');
divBaseConteudo.classList.add('conteudo');
divBaseConteudo.contentEditable = "true";
// divBaseConteudo.innerHTML = "Primeiro parágrafo";

let li = document.getElementsByTagName('li');
for(let i = 0; i < li.length; i++){
    if(li[i].classList.length == 0){
        // li[i].classList.add('artigo');
        li.contentEditable = "true"
        li.value="Primeiro parágrafo";
        li[i].appendChild(divBaseAbrev);
        li[i].appendChild(divBaseConteudo);
    }
}

let abrevArtigo = document.getElementsByClassName("abrev-artigo");

for (let i = 0; i < abrevArtigo.length; i++){
    if(abrevArtigo.length + 1 < 9){
        abrevArtigo[i].innerHTML = "Art. " + parseInt(i + 1) + 'º. ';
    } else{
        abrevArtigo[i].innerHTML = "Art. " + parseInt(i + 1) + '. ';
    }
}

