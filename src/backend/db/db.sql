CREATE DATABASE escribania_sw;

USE escribania_sw;

CREATE TABLE clients (
	id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(100) NOT NULL,
    name VARCHAR(40) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    state VARCHAR(20) NOT NULL,
    PRIMARY KEY(id),
    FULLTEXT(name, surname)
);