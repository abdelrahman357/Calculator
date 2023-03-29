function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
}
let value = "";
const btns = document.querySelectorAll(".calculator button");
btns.forEach((btn) => {
  btn.addEventListener("click", displayElement);
});
let valueOne = "";
let valueTwo = "";
let operator = "";

const screen = document.querySelector(".screen");
screen.textContent = "0";
let screenValue = "";
function displayElement(e) {
  if (
    screen.textContent.length === 1 &&
    screen.textContent === "0" &&
    e.target.className !== "equals"
  ) {
    screenValue = e.target.textContent;
    screen.textContent = screenValue;
  } else if (screen.textContent.length >= 1 && screen.textContent !== "0") {
    if (valueTwo !== "" && e.target.parentElement.className === "operators") {
      screenValue =
        operate(Number(valueOne), Number(valueTwo), operator) +
        e.target.textContent;
      valueOne = screenValue.slice(0, screenValue.length - 1);
      valueTwo = "";
      operator = e.target.textContent;
    } else if (
      e.target.parentElement.className === "operators" &&
      operator === ""
    ) {
      valueOne = screenValue;
      operator = e.target.textContent;
      screenValue += e.target.textContent;
    } else if (
      operator !== "" &&
      e.target.parentElement.className === "operators"
    ) {
      operator = e.target.textContent;
      screenValue =
        screenValue.slice(0, screenValue.length - 1) + e.target.textContent;
    } else if (
      operator !== "" &&
      e.target.parentElement.className === "numbers"
    ) {
      valueTwo += e.target.textContent;
      screenValue += e.target.textContent;
    } else if (e.target.className === "clear") {
      valueOne = "";
      valueTwo = "";
      operator = "";
      screenValue = 0;
    } else if (e.target.className === "equals") {
      console.log("here");
      if (valueOne !== "" && valueTwo !== "" && operator !== "") {
        screenValue = operate(Number(valueOne), Number(valueTwo), operator);
        valueOne = screenValue;
        valueTwo = "";
        operator = "";
      }
    } else {
      screenValue += e.target.textContent;
    }
    screen.textContent = screenValue;
  }
  // console.log(e.target.parentElement.className === "numbers");
}

// if (valueOne.length !== 0 && operators) {
// }
// const display = document.createElement("div");
// display.append(e.target.textContent);
// display.className = "input";
// display.style.display = "inline-block";
// if (e.target.className === "clear") {
//   const nop = document.querySelectorAll(".input");
//   nop.forEach((nop) => nop.remove());
//   return;
// }
// document.body.append(display);
// if ((e.target.parentElement.className === "numbers") & (operators === "")) {
//   valueOne += display.textContent;
// } else if (e.target.parentElement.className === "operators") {
//   operators = display.textContent;
// } else if (
//   e.target.parentElement.className === "numbers" &&
//   operators.length === 1
// ) {
//   valueTwo += display.textContent;
// }
// if (e.target.className === "equals") {
//   const nop = document.querySelectorAll(".input");
//   nop.forEach((nop) => nop.remove());
//   console.log(valueOne, valueTwo);
//   const display = document.createElement("div");
//   display.textContent = operate(
//     Number(valueOne),
//     Number(valueTwo),
//     operators
//   );
//   document.body.append(display);
//   valueOne = `${display.textContent}`;
//   valueTwo = "";
//   operators = "";
// }
