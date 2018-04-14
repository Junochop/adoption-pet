const data = require('./data.js');
const dombuild = require('./dom');

const buttonDog = document.getElementById('dogs');
const buttonCat = document.getElementById('cats');
const buttonDino = document.getElementById('dinos');
const addEvents = () => {
  buttonDog.addEventListener('click', () => {
    filter('dog');
  });
  buttonCat.addEventListener('click', () => {
    filter('cat');
  });
  buttonDino.addEventListener('click', () => {
    filter('dino');
  });
};

const filter = (petType) => {
  const newArray = [];
  const originalArray = data.getPets();
  originalArray.forEach((item) => {
    if (item.type === petType) {
      newArray.push(item);
    };
  });
  console.log('data', newArray);
  dombuild(newArray);
};

module.exports = addEvents;
