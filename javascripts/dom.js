const outputDiv = document.getElementById('pet-container');

const domString = (pets) => {
  let strang = '';
  pets.forEach((pet) => {
    strang += `<div class="col-xs-6 col-md-4 petCard data-pet-id="${pet.id}">`;
    strang += `<p class="pet">${pet.name}</p>`;
    strang += `<img class="petImage" src="${pet.imageUrl}">`;
    strang += `<p class="petColor">${pet.color}</p>`;
    strang += `<p class="petColor">${pet.specialSkill}</p>`;
    strang += `<p class="petType">${pet.type}</p>`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
};

module.exports = printToDom;
