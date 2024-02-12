const button = document.querySelectorAll('input[type="button"]');
const display = document.getElementById("display-calc");
const equals = document.getElementById("btn-equals");
const reset = document.getElementById('btn-reset');

button.forEach((el) => {
  el.addEventListener("click", function () {
    display.value += el.value;
  });
});

equals.addEventListener("click", function () {
  display.value = eval(display.value.replace(/[^\d()+\-*/.]/g, ''));
});

reset.addEventListener('click', function() {
  display.value = '';
})