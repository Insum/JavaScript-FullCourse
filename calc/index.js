let num1El = parseInt(document.getElementById("num1-el").innerHTML);
let num2El = parseInt(document.getElementById("num2-el").innerHTML);
let sumEl = document.getElementById("sum-el");

function add() {
    sum = num1El + num2El;
    sumEl.innerHTML = "Sum: " + sum;
}

function subtract() {
    sum = num1El - num2El;
    sumEl.innerHTML = "Sum: " + sum;
}

function divide() {
    sum = num1El / num2El;
    sumEl.innerHTML = "Sum: " + sum;
}

function multiply() {
    sum = num1El * num2El;
    sumEl.innerHTML = "Sum: " + sum;
}