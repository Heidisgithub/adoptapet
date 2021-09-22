const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const {listAnimals, animalDetails}= require('./pets')

app.get('/animals/:pet_type', listAnimals)
app.get('/animals/:pet_type/:pet_id', animalDetails)

app.get('/', (req, res) => res.send(`
<h1>Adopt a pet!</h1>
<p> Browse through the links below to find your new furry friend:</p>
<ul>
<li><a href="/animals/dogs">Dogs</a></li>
<li><a href="/animals/cats">Cats</a></li>
<li><a href="/animals/rabbits">Rabbits</a></li>
</ul>
`));

app.listen(port, () => console.log(`Server listening  on port ${port}`));