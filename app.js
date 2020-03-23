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

// Ajusta a enumeração dos capítulos
let titulos = document.getElementsByClassName('titulo')
for (let i = 0; i < titulos.length; i++){
    titulos[i].innerHTML = "Capitulo " + titulos.length;
}

// Adiciona as abreviações corretas nas divs
let abrevArtigo = document.getElementsByClassName("abrev-artigo");

for (let i = 0; i < abrevArtigo.length; i++){
    if(abrevArtigo.length + 1 < 9){
        abrevArtigo[i].innerHTML = "Art. " + parseInt(i + 1) + 'º. ';
    } else{
        abrevArtigo[i].innerHTML = "Art. " + parseInt(i + 1) + '. ';
    }
}