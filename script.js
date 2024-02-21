const button = document.querySelectorAll('input[type="button"]');
const display = document.getElementById("display-calc");
const equals = document.getElementById("btn-equals");
const reset = document.getElementById('btn-reset');

button.forEach((el) => {
  el.addEventListener("click", function () {
    const inputValue = el.value;
    const lastChar = display.value.charAt(display.value.length - 1);
    if (!isNaN(inputValue) || inputValue === '.' || inputValue === '(' || inputValue === ')' || ['+', '-', '*', '/'].includes(inputValue)) {
      if (inputValue === '+' || inputValue === '-' || inputValue === '*' || inputValue === '/') {
        if (!['+', '-', '*', '/'].includes(lastChar)) {
          display.value += inputValue;
        }
      } else {
        display.value += inputValue;
      }
    }
  });
});

equals.addEventListener("click", function () {
  display.value = eval(display.value.replace(/[^\d()+\-*/.]/g, ''));
});

reset.addEventListener('click', function() {
  display.value = '';
});
