let calculatorDiv = document.querySelector("#calculator");
let calcNumDiv = document.createElement("div");
let display = document.querySelector("#display");
calcNumDiv.setAttribute("id", "calcNum");
calculatorDiv.appendChild(calcNumDiv);

for (let i = 9; i >= 0; i--) {
  let numDiv = document.createElement("button");
  numDiv.addEventListener("click", updateDisplay);
  numDiv.innerText = i;
  calcNumDiv.appendChild(numDiv);
}

function updateDisplay(e) {
  display.textContent = e.target.innerText;
}

let firstOperand;
let secondOperand;
let arithOperator;

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

function operator(firstOperand, secondOperand, arithOperator) {
  switch (arithOperator) {
    case "+":
      return add(firstOperand, secondOperand);
      break;
    case "-":
      return subtract(firstOperand, secondOperand);
      break;
    case "*":
      return multiply(firstOperand, secondOperand);
      break;
    case "/":
      return divide(firstOperand, secondOperand);
      break;

    default:
      break;
  }
}
