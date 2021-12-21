const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ul = document.querySelector('.gallery');
const list = images.map((img) => {
  let imgEl = document.createElement('img');
  imgEl.src = `${img.url}`;
  imgEl.alt = `${img.alt}`;
  imgEl.width = 500;
  imgEl.height = 300;
  let elem = `<li><img src=${imgEl.src} alt=${imgEl.alt} width=${imgEl.width} height=${imgEl.height}></li>`
  return elem;
});
ul.insertAdjacentHTML('afterbegin', list.join(""));
console.log(ul);
