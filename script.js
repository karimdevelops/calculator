let allOperations = ["+", "-", "x", "÷"];
let other = [".", "="];
let calculatorDiv = document.querySelector("#calculator");
let calcNumDiv = document.createElement("div");
let operationsDiv = document.createElement("div");
let display = document.querySelector("#display");
let clearBut = document.querySelector("#clear");
let backspaceBut = document.querySelector("#backspace");
operationsDiv.setAttribute("id", "calcOp");
calcNumDiv.setAttribute("id", "calcNum");
calculatorDiv.appendChild(calcNumDiv);
calculatorDiv.appendChild(operationsDiv);

clearBut.addEventListener("click", clear);
backspaceBut.addEventListener("click", remove);

for (let i = 9; i >= 0; i--) {
  let numDiv = document.createElement("button");
  numDiv.addEventListener("click", updateVal);
  numDiv.innerText = i;
  calcNumDiv.appendChild(numDiv);
}

other.forEach((op) => {
  let other = document.createElement("button");
  if (op == "=") other.addEventListener("click", calc);
  else if (op == ".") other.addEventListener("click", addDeci);
  other.setAttribute("id", "other");
  other.innerText = op;
  calcNumDiv.appendChild(other);
});

allOperations.forEach((op) => {
  let opButton = document.createElement("button");
  opButton.innerText = op;
  opButton.addEventListener("click", updateVal);
  operationsDiv.appendChild(opButton);
});

function updateVal(e) {
  let text = e.target.innerText;
  if (allOperations.includes(text) && secondOperand == "") {
    arithmeticOp = text;
  } else if (arithmeticOp == "") {
    firstOperand += text;
  } else if (!allOperations.includes(text)) {
    secondOperand += text;
  }
  updateDisplay(firstOperand, secondOperand, arithmeticOp);
}

function updateDisplay(firstOperand, secondOperand, arithmeticOp) {
  if (arithmeticOp != "" && secondOperand == "") {
    display.textContent = arithmeticOp;
  } else if (secondOperand == "") {
    display.textContent = firstOperand;
  } else if (firstOperand != "") {
    display.textContent = secondOperand;
  }
}

function clear() {
  display.textContent = "";
  firstOperand = "";
  secondOperand = "";
  arithmeticOp = "";
}

function remove() {
  let removeFromOperand = secondOperand != "" ? secondOperand : firstOperand;
  let removeFromOperandArr = removeFromOperand.split("");
  removeFromOperandArr.splice(-1, 1);
  removeFromOperandArr = removeFromOperandArr.join("");
  removeFromOperand == secondOperand
    ? (secondOperand = removeFromOperandArr)
    : (firstOperand = removeFromOperandArr);
  updateDisplay(firstOperand, secondOperand, arithmeticOp);
}

function addDeci() {
  let addToOperand = secondOperand != "" ? secondOperand : firstOperand;
  let addDeciToOperand = addToOperand + ".";
  if (!addToOperand.includes(".")) {
    addToOperand == secondOperand
      ? (secondOperand = addDeciToOperand)
      : (firstOperand = addDeciToOperand);
    updateDisplay(firstOperand, secondOperand, arithmeticOp);
  }
}

function calc() {
  let result = operation(+firstOperand, +secondOperand, arithmeticOp);
  clear();
  firstOperand = result != ":(" ? result : "";
  display.textContent = result;
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
  if (y == 0) {
    clear();
    return ":(";
  }
  return x / y;
}

function operation(firstOperand, secondOperand, arithmeticOp) {
  switch (arithmeticOp) {
    case "+":
      return add(firstOperand, secondOperand);
    case "-":
      return subtract(firstOperand, secondOperand);
    case "x":
      return multiply(firstOperand, secondOperand);
    case "÷":
      return divide(firstOperand, secondOperand);
    default:
      break;
  }
}
