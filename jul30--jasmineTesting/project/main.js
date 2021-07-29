function calculate(inputValue) {
  const expression = /\+|\-|\*|\//;

  const numbers = inputValue.split(expression);

  const numOne = parseInt(numbers[0]);
  const numTwo = parseInt(numbers[1]);

  const operation = inputValue.match(expression);

  if (!operation || Number.isNaN(numOne) || Number.isNaN(numTwo)) {
      updateResult('nope')
      return
  }

  const calc = new Calculator();
  calc.add(numberOne);

  let result;
  switch (operation[0]) {
    case "+":
      result = calc.add(numTwo);
      break;
    case "-":
      result = calc.subtract(numTwo);
      break;
    case "*":
      result = calc.multiply(numTwo);
      break;
    case "/":
      result = calc.divide(numTwo);
      break;
  }
}

function updateResult() {
    const el = document.getElementById('result')

    if (el) {
        el.innerText = result
    }
}