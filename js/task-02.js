const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const modifiedList = ingredients.map((i) => {
  const ingredient = document.createElement('li');
  ingredient.textContent = i;
  ingredient.classList.add('item');
  return ingredient;
});

const ulElement = document.getElementById('ingredients');

ulElement.append(...modifiedList);
