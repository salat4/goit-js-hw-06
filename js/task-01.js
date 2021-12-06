const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length); 
const item = document.querySelectorAll('.item');
item.forEach((e) => console.log('Category:', e.firstElementChild.textContent, 'Elements:', e.lastElementChild.children.length));