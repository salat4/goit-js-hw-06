const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length); // Number of categories: 3

const item = document.querySelectorAll('.item');

//item.forEach((e) => console.log('Category:', e.firstElementChild.textContent, 'Elements:', e.lastElementChild.children.length));



const newArray = [...categories];
