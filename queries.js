/**
 * Part 2: MySQL Queries
Connect your server to your database using MySQLJS (mysql javascript)
Complete the server routes outlined in the route table below (use the queries.js helper functions)
Technologies:

MySQL
MySQLJS
Postman
ROUTES:

METHOD	PATH	DESCRIPTION
GET	/api/donuts	respond with all the donuts from the database
GET	/api/donuts/:id	respond with single donut, based on req.params.id
 */
const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: 'apples',
  host: 'localhost',
  database: 'donuts',
});

// .connect() ?
db.connect();

const getAllDonuts = (callback) => {
  db.query('SELECT * FROM donuts;', (err, results) => {
    if(err) {
      // throw err;
      callback(err); // => res.end();
      return;
    }
    callback(null, results);
  });
};

const getOneDonut = (donutID, callback) => {
  db.query('SELECT * FROM donuts WHERE id = ? ;', donutID, (err, results) => {
    if(err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};


module.exports = {
  getAllDonuts,
  getOneDonut,
};
