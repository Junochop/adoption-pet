const data = require('./data.js');
const dombuild = require('./dom');

const buttonDog = document.getElementById('dogs');
const buttonCat = document.getElementById('cats');
const buttonDino = document.getElementById('dinos');
const addEvents = () => {
  buttonDog.addEventListener('click', () => {
    filter('dog');
    reset();
  });
  buttonCat.addEventListener('click', () => {
    filter('cat');
    reset();
  });
  buttonDino.addEventListener('click', () => {
    filter('dino');
    reset();
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

const reset = () => {
  const buttonLocation = document.getElementById('reset');
  const originArray = data.getPets();
  buttonLocation.classList.remove('hide');
  buttonLocation.addEventListener('click', () => {
    dombuild(originArray);
    buttonLocation.classList.add('hide');
  });
};

module.exports = addEvents;
