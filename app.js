const buttons = document.getElementsByClassName('btn');
let capButton = document.getElementsByClassName('add-cap');
// const artigo = new RegExp("Art. [0-9]{1,}o");

capButton = capButton[0];

for (let btn of buttons){
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        document.execCommand(cmd, false, null);
    })
};

for (let i = 0; i < document.getElementsByClassName("abrev-artigo").length; i++){
    document.getElementsByClassName('abrev-artigo')[i].innerHTML = "Art. " + parseInt(i + 1) + '.';
}

// capButton.addEventListener('click', () => {
//     var velho = document.getElementsByClassName("capitulo");
//     velho = velho[0];
//     var novo = velho.cloneNode(true);
//     novo.getElementsByClassName("titulo")[0].innerHTML = "Capitulo " + String(parseInt(document.getElementsByClassName("capitulo").length) + 1);
//     let normativa = document.getElementsByClassName("normativa")[0];
//     normativa.appendChild(novo);
// });

