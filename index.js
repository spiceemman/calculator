let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let resultP = document.getElementById("sum-el")

function add(){
    let result = num1 + num2
    resultP.textContent = "Sum: " + result;
}
function subtract(){
    let result = num1 - num2
    resultP.textContent = "Difference: " + result;
}
function divide(){
    let result = num1 / num2
    resultP.textContent = "Divided: " + result;
}
function multiply(){
    let result = num1 * num2
    resultP.textContent = "Product: " + result;
}
