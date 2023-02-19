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


const modifiedList = images.map((image) => {
  const liElement = document.createElement('li');
  liElement.insertAdjacentHTML('afterbegin', `<img src="${image.url}" alt="${image.alt}" width="100" height="100">`);
  return liElement;
});

const ulElement = document.querySelector('.gallery');

ulElement.append(...modifiedList);
ulElement.style.cssText = 'display: flex;'