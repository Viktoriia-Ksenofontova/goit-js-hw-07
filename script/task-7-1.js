const categories = document.querySelectorAll('ul#categories>li.item');
const countOfCategories = categories.length;
console.log(`В списке ${countOfCategories} категории`);

const countOfElement = categories.forEach(category => console.log(`Категория: ${category.querySelector('h2').textContent}
Количество элементов: ${category.querySelectorAll('li').length}`));


