const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// const getIngredient = function (arr) {
//   arr.forEach(ingredient => {
//     const ingredientsListRef = document.querySelector('#ingredients');
//     const listItemRef = document.createElement('li');
//     listItemRef.textContent = ingredient;
//     ingredientsListRef.appendChild(listItemRef);
//   })
// };

// getIngredient(ingredients);

const ingredientsListRef = document.querySelector('#ingredients');

function getIngredient(arr) {
const itemRef = arr.map((ingredient) => 
  `<li> ${ingredient} </li>`);
  return itemRef;
}

// console.log(getIngredient(ingredients));

ingredientsListRef.insertAdjacentHTML('beforeend', getIngredient(ingredients).join(''));
