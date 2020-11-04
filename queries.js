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
