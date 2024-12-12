let numberBtn = document.querySelectorAll(".number-btn");
let input = document.querySelector(".input");
let totalBtn = document.querySelector(".count-btn");
let remoweAll = document.querySelector(".delete-btn");
let remowe = document.querySelector(".delete-one-btn");
let operatorBtn = document.querySelectorAll(".operator-btn");
let pracent = document.querySelector(".interest-btn");
input.innerText = "0";

numberBtn.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    let startLength = input.innerText;
    let count = el.target.value;
    if (startLength.length === 1 && startLength[0] === "0" && count === "0") {
      input.innerText = "0";
    } else if (
      startLength.length === 1 &&
      startLength[0] === "0" &&
      count !== "0" &&
      count !== "."
    ) {
      input.innerText = `${count}`;
    } else if (
      startLength.length === 1 &&
      startLength[0] === "0" &&
      count === "."
    ) {
      input.innerText += `${count}`;
    } else {
      input.innerText += `${count}`;
    }
  });
});

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    let type = el.target.value;
    let regex = /^[+\-*/]$/;
    let check = input.innerText;
    if (!regex.test(check[check.length - 1])) {
      input.innerText += `${type}`;
    }
  });
});

totalBtn.addEventListener("click", () => {
  let data = input.innerText;
  calculate(data);
});

function calculate(element) {
  let number = element.match(/\d+(\.\d+)?/g).map(Number);
  let operator = element.match(/[+\-*/]/g);
  [number, operator] = checkSpecialOperator(operator, number);
  let total = number[0];
  let index = 0;
  for (let b of operator) {
    if (b === "+") {
      total = total + number[index + 1];
    } else if (b === "-") {
      total = total - number[index + 1];
    }
    index++;
  }
  input.innerText = total;
}

remoweAll.addEventListener("click", () => {
  input.innerText = 0;
});

remowe.addEventListener("click", () => {
  let strFile = input.innerText;
  let newStr = "";

  for (let a = 0; a < strFile.length - 1; a++) {
    newStr += strFile[a];
  }

  if (!newStr) {
    input.innerText = 0;
  } else {
    input.innerText = newStr;
  }
});

pracent.addEventListener("click", () => {
  let information = input.innerText;
  let regex = /^[+\-*/]$/;
  let checkNumber = "";
  let newNumber = "";
  let testnm = "";
  for (let a = information.length - 1; a >= 0; a--) {
    if (regex.test(information[a])) {
      testnm = information.slice(0, a + 1);
      break;
    } else {
      checkNumber += information[a];
    }
  }
  for (let b = checkNumber.length - 1; b >= 0; b--) {
    newNumber += checkNumber[b];
  }

  calculateInterest(newNumber, testnm);
});

function calculateInterest(element, string) {
  if (element) {
    let num = Number(element);
    num = num / 100;
    string += num;
    input.innerText = string;
  }
}

function checkSpecialOperator(element, array) {
  let regex = /^[*/]$/;
  let index = 0;
  let total = 0;
  let checkElement = element.some((el) => regex.test(el));
  console.log(checkElement);
  if (checkElement) {
    for (let a = 0; a < element.length; a++) {
      index = a;
      if (element[a] === "*") {
        total = array[index] * array[index + 1];
        array[index] = total;
        array.splice(index + 1, 1);
        element.splice(index, 1);
        a = -1;
      } else if (element[a] === "/") {
        total = array[index] / array[index + 1];
        array[index] = total;
        array.splice(index + 1, 1);
        element.splice(index, 1);
        a = -1;
      }
    }
  }

  return [array,element];
}
