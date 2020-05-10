const btnDigits = document.querySelectorAll('.digits button');
btnDigits.forEach(digit => digit.addEventListener('click', digitPressed));

const display = document.querySelector('.display');

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

const btnOper = document.querySelectorAll('.opers button');
btnOper.forEach(digit => digit.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText;
}

const btnEq = document.querySelector('.eq');
btnEq.addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', clearPressed);

function clearPressed() {
    display.value = "";
}

const btnBack = document.querySelector('.back');
btnBack.addEventListener('click', backPressed);

function backPressed() {
    let exp = display.value;
    display.value = exp.substring(0,exp.length-1);
}

