DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2),
  stock_quantity INT default 0,
  PRIMARY KEY (id )
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dominion", "Games", 39.50, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Citadels", "Games", 15.0, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ticket to Ride", "Games", 82.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Matte Lipstick - #16 Del Rio", "Health and Beauty", 32.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CHANEL Dimensions De CHANEL Mascara", "Health and Beauty",42.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ALGENIST GENIUS Liquid Collagen Lip", "Health and Beauty", 32.50, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Westinghouse - 55 Class - LED - 2160p - Smart - 4K", "Electronics", 222.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung - Galaxy Tab E - 9.6 - 16GB - Black", "Electronics", 120.50, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HP OfficeJet 4650 Wireless All-in-One Photo Printer", "Electronics", 250.0, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 2.50, 100);
