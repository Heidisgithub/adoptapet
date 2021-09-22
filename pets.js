const pets = require("./helper");

function listAnimals(req, res) {
  const petsArray = pets[req.params.pet_type];
  elementsHTML = "";
  petsArray.forEach((element, id) => {
    elementsHTML += `
        <li>
        <a href="/animals/${req.params.pet_type}/${id}">${element.name}<a/>
        </li>
        `;
  });
  res.send(`
<h1>List of ${req.params.pet_type}</h1>
<ul>${elementsHTML}</ul>
`);
}

function animalDetails(req, res) {
  const petsArray = pets[req.params.pet_type];
  const pet = petsArray[req.params.pet_id];
  console.log(pet);
  res.send(`
  <h1>${pet.name}</h1>
  <img src="${pet.url}"">
<p>${pet.description}</p>
<ul>
<li>Age: ${pet.age}</li>
<li>Breed: ${pet.breed}</li>

</ul> 
  `);
}

exports.listAnimals = listAnimals;
exports.animalDetails = animalDetails;
