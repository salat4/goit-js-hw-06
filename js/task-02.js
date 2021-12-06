const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');
const list = ingredients.map((name) => {
    let elemEl1 = document.createElement('li');
    elemEl1.textContent = name;
    elemEl1.classList.add('item');
    return elemEl1;
});

ul.append(...list);
console.log(ul);