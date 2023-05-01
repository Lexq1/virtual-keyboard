// let charRu = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 13, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 32];
const charEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backapace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'];
// let arr = [];

function createKeyboard(){
    const BODY = document.querySelector('body');
    let keyboard = document.createElement('div');
        keyboard.setAttribute('class','keyboard');
    let textarea = document.createElement('textarea');
        textarea.setAttribute('class', 'keyboard-textarea');
    let divWrap = document.createElement('div');
        divWrap.setAttribute('class', 'wrap-keyboard');

    BODY.append(keyboard);
    keyboard.append(textarea);
    keyboard.append(divWrap);

    for(let i = 0; i < charEn.length; i++){
            let btn = document.createElement('button');
            btn.setAttribute('class', 'btn');
            btn.innerHTML = charEn[i];
            if(i == 13 || i == 29 || i == 41) btn.style.width = '11%';
            if(i == 14 || i == 28 || i == 55 || i == 54 || i == 59) btn.style.width = '9%';
            if(i == 42) btn.style.width = '17%';
            if(i == 54) btn.style.width = '7%';
            if(i == 58) btn.style.width = '38%';
            if (i == 61 || i == 62 || i == 63 || i == 53) btn.style.width = '7%';
            divWrap.append(btn);
        }
    
}

createKeyboard();

function printKeyboard(){
    const wrapKeyboard = document.querySelector('.wrap-keyboard');
    const keyboardTextarea = document.querySelector('.keyboard-textarea');
    wrapKeyboard.addEventListener('click', e => {
        keyboardTextarea.innerHTML += e.target.innerHTML;
    })

    document.onkeypress = e => {
        keyboardTextarea.innerHTML += e.key;
    }
}

printKeyboard();


// document.onkeypress = e =>{
//     arr.push(e.key);
//     console.log(arr);
// }