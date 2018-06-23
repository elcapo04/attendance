DROP DATABASE IF EXISTS test;
CREATE DATABASE test;

USE test;

CREATE TABLE IF NOT EXISTS `person` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `name` int(11) NOT NULL,
  `surname` binary(16) NOT NULL,
   `dob` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);


DESCRIBE person;

INSERT INTO person (name, surname, dob) VALUES('Esteban', 'Neyra');


SELECT * FROM person;