let parser = new DOMParser();
normativa = document.getElementsByClassName("normativa")[0];
let capitulo = parser.parseFromString("capitulo.html", "text/html");

// Checa a inexistência de capitulos. Caso positivo, cria um novo.
let divCapitulo = document.createElement('div');
divCapitulo.classList.add('capitulo');

let titulo = document.createElement('div');
titulo.classList.add('titulo');
let subtitulo = document.createElement('div');
subtitulo.classList.add('subtitulo');
subtitulo.innerHTML = "DISPOSIÇÕES PRELIMINARES";
divCapitulo.appendChild(titulo);
divCapitulo.appendChild(subtitulo);

if (document.getElementsByClassName('capitulo').length == 0){
    normativa.appendChild(divCapitulo);
}

// Adiciona artigos automaticamente
let artigo = document.getElementsByClassName('artigo');
if(artigo.length == 0){
    let divAbrev = document.createElement('div');
    divAbrev.contentEditable = 'false';
    divAbrev.classList.add('abrev-artigo');

    let divbase = document.createElement('div');
    divbase.innerHTML = "Escreva o artigo";
    divbase.classList.add('artigo');
    divbase.appendChild(divAbrev);
    divbase.prepend(divAbrev);

    normativa.appendChild(divbase);
}