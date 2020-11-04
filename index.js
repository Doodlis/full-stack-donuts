/**
 * Objectives (read this carefully):

Create a server that responds to the specified RESTful routes
Each route should respond back with dummy data for now
Technologies:

Node
Express
NPM
Git
ROUTES (PART 1)

METHOD	PATH	DESCRIPTION
GET	/api/donuts	respond with string "all the donuts"
GET	/api/donuts/:id	respond with string "single donut"
 */
const express = require('express');
const app = express();
const PORT = 3030;

app.get('/api/donuts', (req, res) => {
  res.send('all the donuts');
});

app.get('/api/donuts/:id', (req, res) => {
  // pulling off the id somehow
  const donutID = req.params.id;
  console.log('Donut id requested: ', donutID);
  res.send(`single donut: id => ${donutID}`);
});

app.listen(PORT, (err) => {
  if(err) throw err;
  console.log(`Listening on port ${PORT}...`);
});


