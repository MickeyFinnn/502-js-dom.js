const btnDigits = document.querySelectorAll(".digits button");
btnDigits.forEach((digit) => digit.addEventListener("click", digitPressed));

const display = document.querySelector(".display");

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

const btnOpers = document.querySelectorAll(".opers button");
btnOpers.forEach((digit) => digit.addEventListener("click", operPressed));

function operPressed(ev) {
  display.value += ev.target.innerText;
}

const btnEq = document.querySelector(".eq");
btnEq.addEventListener("click", eqPressed);

function eqPressed() {
  display.value = eval(display.value);
}

const btnClear = document.querySelector(".clear");
btnClear.addEventListener("click", clearPressed);

function clearPressed() {
  display.value = "";
}

const btnBack = document.querySelector(".back");
btnBack.addEventListener("click", backPressed);

function backPressed() {
  let exp = display.value;
  display.value = exp.substring(0, exp.length - 1);
}

const btnZero = document.querySelector(".zero");
btnZero.addEventListener("click", divByZero);

function divByZero() {
  if (
    display.value ===
    display.value.substring(0, display.value.length - 2) + "/0"
  ) {
    alert("EROR404");
  }
}
