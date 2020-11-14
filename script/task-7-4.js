let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');


function increment() {
  counterValue += 1;
  render();
}

function decrement() {
  counterValue -= 1;
  render();
}

function render() {
  valueRef.textContent = counterValue;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
