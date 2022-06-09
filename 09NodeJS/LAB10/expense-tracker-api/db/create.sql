CREATE DATABASE expense_tracker;
USE expense_tracker;

CREATE TABLE categories (
	id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    type VARCHAR(7) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE logs (
	id INT AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    date DATE NOT NULL,
    amount INT NOT NULL,
    category_id INT NOT NULL,
    comment VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories (id)
);