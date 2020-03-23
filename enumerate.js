// Adiciona as abreviações corretas nas divs

let abrevArtigo = document.getElementsByClassName("abrev-artigo");

for (let i = 0; i < abrevArtigo.length; i++){
    if(abrevArtigo.length + 1 < 9){
        abrevArtigo[i].innerHTML = "Art. " + parseInt(i + 1) + 'º. ';
    } else{
        abrevArtigo[i].innerHTML = "Art. " + parseInt(i + 1) + '. ';
    }
}

// Ajusta a enumeração dos capítulos
let titulos = document.getElementsByClassName('titulo')
for (let i = 0; i < titulos.length; i++){
    titulos[i].innerHTML = "Capitulo " + titulos.length;
}