let allOperations = ["+", "-", "x", "÷"];
let other = [".", "="];
let calculatorDiv = document.querySelector("#calculator");
let calcNumDiv = document.createElement("div");
let operationsDiv = document.createElement("div");
let display = document.querySelector("#display");
let clearBut = document.querySelector("#clear");
operationsDiv.setAttribute("id", "calcOp");
calcNumDiv.setAttribute("id", "calcNum");
calculatorDiv.appendChild(calcNumDiv);
calculatorDiv.appendChild(operationsDiv);

clearBut.addEventListener("click", clear);

for (let i = 9; i >= 0; i--) {
  let numDiv = document.createElement("button");
  numDiv.addEventListener("click", updateDisplay);
  numDiv.innerText = i;
  calcNumDiv.appendChild(numDiv);
}

other.forEach((op) => {
  let other = document.createElement("button");
  if (op == "=") other.addEventListener("click", calc);
  other.setAttribute("id", "other");
  other.innerText = op;
  calcNumDiv.appendChild(other);
});

allOperations.forEach((op) => {
  let opButton = document.createElement("button");
  opButton.innerText = op;
  opButton.addEventListener("click", updateDisplay);
  operationsDiv.appendChild(opButton);
});

function updateDisplay(e) {
  let text = e.target.innerText;
  display.textContent += text;
  if (allOperations.includes(text)) {
    arithmeticOp = text;
  } else if (arithmeticOp == "") {
    firstOperand += text;
  } else {
    secondOperand += text;
  }
}

function clear() {
  display.textContent = "";
  firstOperand = "";
  secondOperand = "";
  arithmeticOp = "";
}

function calc() {
  let result = operation(+firstOperand, +secondOperand, arithmeticOp);
  clear();
  firstOperand = result;
  display.textContent = result;
  resultState = true;
}

let firstOperand = "";
let secondOperand = "";
let arithmeticOp = "";

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operation(firstOperand, secondOperand, arithmeticOp) {
  switch (arithmeticOp) {
    case "+":
      return add(firstOperand, secondOperand);
      break;
    case "-":
      return subtract(firstOperand, secondOperand);
      break;
    case "x":
      return multiply(firstOperand, secondOperand);
      break;
    case "÷":
      return divide(firstOperand, secondOperand);
      break;

    default:
      break;
  }
}
