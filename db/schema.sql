CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT NOT NULL,
    PRIMARY KEY(id),
    name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0
);