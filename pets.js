const pets = require('./helper')

function listAnimals (req, res){
    const petsArray = pets[req.params.pet_type]
    elementsHTML = ""
    petsArray.forEach(element => {
        elementsHTML+=`
        <li>${element.name}</li>
        `
    });
res.send (`
<h1>List of ${req.params.pet_type}</h1>
<ul>${elementsHTML}</ul>
`)

}

exports.listAnimals=listAnimals