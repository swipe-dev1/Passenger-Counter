// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// function add() {
//     let count = num1 + num2
//     document.getElementById("sum-el").textContent = "Sum " + count
// }

// function subtract() {
//     let count = num1 - num2
//     document.getElementById("sum-el").textContent = "Sum " + count
// }

// function divide() {
//     let count = num1 / num2
//     document.getElementById("sum-el").textContent = "Sum " + count
// }

// function multiply() {
//     let count = num1 * num2
//     document.getElementById("sum-el").textContent = "Sum " + count
// }


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count 
} 

function save() {
    let content = count + " - "
    saveEl.textContent += content
    count = 0
    countEl.textContent = count
}