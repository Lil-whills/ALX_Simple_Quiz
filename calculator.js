function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero!";
  }
  return num1 / num2;
}

function getInputs() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  return { number1, number2 };
}

function displayResult(result) {
  document.getElementById('calculation-result').textContent = result;
}

// Add event listeners
document.getElementById('add').addEventListener('click', () => {
  const { number1, number2 } = getInputs();
  displayResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', () => {
  const { number1, number2 } = getInputs();
  displayResult(subtract(number1, number2));
});

document.getElementById('multiply').addEventListener('click', () => {
  const { number1, number2 } = getInputs();
  displayResult(multiply(number1, number2));
});

document.getElementById('divide').addEventListener('click', () => {
  const { number1, number2 } = getInputs();
  displayResult(divide(number1, number2));
});
