const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => res.send(`
<h1>Adopt a pet!</h1>
<p> Browse through the links below to find your new furry friend:</p>
`));

app.listen(port, () => console.log(`Server listening  on port ${port}`));