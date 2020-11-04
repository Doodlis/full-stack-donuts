-- CREATE SOMETHING
DROP DATABASE IF EXISTS donuts;
-- create database
CREATE DATABASE donuts;

-- use the database
USE donuts;

-- make a table for the stuff

-- fields: id name price sprinkles? glazed? quantity
CREATE TABLE donuts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  donut_name VARCHAR(20) NOT NULL UNIQUE,
  price DECIMAL(7, 2) NOT NULL,
  quantity INT,
  sprinkles BOOLEAN,
  glazed BOOLEAN
);

INSERT INTO donuts (donut_name, price, quantity, sprinkles, glazed)
  VALUES ('Sandy', 0.00, 1, TRUE, FALSE);
INSERT INTO donuts (donut_name, price, quantity, sprinkles, glazed)
  VALUES ('jelly-filled', 2.00, 20, FALSE, TRUE);
INSERT INTO donuts (donut_name, price, quantity, sprinkles, glazed)
  VALUES ('blueberry', 8, 2, FALSE, FALSE);
INSERT INTO donuts (donut_name, price, quantity, sprinkles, glazed)
  VALUES ('Uncooked Dough', 0.10, 100, FALSE, FALSE);
INSERT INTO donuts (donut_name, price, quantity, sprinkles, glazed)
  VALUES ('Cake', 3.00, 100, FALSE, FALSE);
INSERT INTO donuts (donut_name, price, quantity, sprinkles, glazed)
  VALUES ('High Roller', 10000.00, 1, TRUE, TRUE);
  