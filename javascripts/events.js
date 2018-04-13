const originData = require('./data');

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
  const originalArray = originData.getPets();
  originalArray.forEach((item) => {
    if (item.type === petType) {
      newArray.push(item);
    };
  });
};

module.exports = addEvents;
