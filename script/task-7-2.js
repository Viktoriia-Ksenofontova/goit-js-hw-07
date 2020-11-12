const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsList = document.querySelector('#ingredients');

const getIngredient = ingredients.forEach(ingredient => {
  const ingredientsListItem = document.createElement('li');
  ingredientsListItem.textContent = ingredient;
  
});

ingredientsList.append(getIngredient);
