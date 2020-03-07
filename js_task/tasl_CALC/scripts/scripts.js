var number;
var operator;
var operatorAttr;
var x = null;
var y = null;
var res;

function setNumber(number) {
  if (x != null) {
    y = number;
  } else {
    x = number;
  }
}

function setOperator(operatorAttr) {
  operator = operatorAttr;
}

function calculator(x, y, operator) {
  switch (operator) {
    case "+":
      return (res = x + y);
    case "-":
      return (res = x - y);
    case "*":
      return (res = x * y);
    case "/":
      return (res = x / y);
  }
}

function result() {
  calculator(x, y, operator);
  alert("Результат вычисления выражения: " + res);
}
