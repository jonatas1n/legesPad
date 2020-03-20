let textbox = document.getElementsByClassName('textbox');
let buttons = document.getElementsByClassName('btn');
let capButton = document.getElementsByClassName('add-cap');
capButton = capButton[0];
textbox = textbox[0];

for (let btn of buttons){
    btn.addEventListener('click', () =>{
        let cmd = btn.dataset['command'];
        document.execCommand(cmd, false, null);
    })
};

capButton.addEventListener('click', () => {
    var velho = document.getElementsByClassName("capitulo");
    velho = velho[0];
    console.log(velho);
    var novo = velho.cloneNode(true);
    novo.getElementsByClassName("titulo")[0].innerHTML = "Capitulo " + String(parseInt(document.getElementsByClassName("capitulo").length) + 1);
    textbox.appendChild(novo);
    
});

