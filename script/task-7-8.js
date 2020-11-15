const numberRef = document.querySelector('#controls>input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let number = 0;


renderBtnRef.addEventListener('click', () => {
  number = numberRef.value;
  createBoxes(number); 
});

destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) { 
  let elementWidth = 30;
  let elementHeight = 30; 
  for (let i = 0; i < amount; i += 1){
    let newElement = document.createElement('div');
    newElement.style.width = `${elementWidth}px`;
    newElement.style.height = `${elementHeight}px`;
    newElement.style.backgroundColor=`rgb(${Math.random()*(255)},${Math.random()*(255)},${Math.random()*(255)})`
    
    boxesRef.append(newElement);

    elementWidth += 10;
    elementHeight += 10;
  }
}

function destroyBoxes() {
  const boxesForDestroy = document.querySelectorAll('#boxes>div');
  boxesForDestroy.forEach(box => {
    box.remove();
  })
}

