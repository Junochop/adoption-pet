const domEvents = require('./events');

const outputDiv = document.getElementById('pet-container');

const domString = (pets) => {
  let strang = '';
  pets.forEach((pet) => {
    strang += `<div class="petCard">`;
    strang += `<p class="pet">${pet.name}</p>`;
    strang += `<img class="petImage" src="${pet.imageUrl}">`;
    strang += `<p class="petColor">${pet.color}</p>`;
    strang += `<p class="petSkill">${pet.specialSkill}</p>`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
  domEvents();
};

module.exports = printToDom;
