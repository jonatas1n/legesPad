const buttons = document.getElementsByClassName('btn');

for (let btn of buttons){
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        document.execCommand(cmd, false, null);
    })
};