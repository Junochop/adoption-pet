const buttonDog = document.getElementById('dogs');
const buttonCat = document.getElementById('cats');
const buttonDino = document.getElementById('dinos');

const addEvents = (petArray) => {

  buttonDog.addEventListener('click', () => {
    filter('dog');
  });

  buttonCat.addEventListener('click', () => {
    filter('cat');
  });
  
  buttonDino.addEventListener('click', () => {
    filter('dino');
  });

  const filter = (petType) => {
    const newArray = [];
    petArray.forEach((pet) => {
      if (pet.type === petType) {
        newArray.push(pet);
      };
    });
    console.log('new', newArray);
  };
};

module.exports = addEvents;   
