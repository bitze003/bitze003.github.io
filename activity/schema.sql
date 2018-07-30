DROP DATABASE IF EXISTS top_songs_DB;
CREATE DATABASE top_songs_DB;

USE top_songs_DB;

CREATE TABLE Top5000(
id INT NOT NULL,
artist VARCHAR(50) NOT NULL,
song VARCHAR(50)NULL,
rel_year INT NULL,
raw_total FLOAT NULL,
raw_usa FLOAT NULL,
raw_uk FLOAT NULL,
raw_eur FLOAT NULL,
raw_row FLOAT NULL,
PRIMARY KEY (id)
);

SELECT * FROM Top5000;

SELECT song FROM Top5000 WHERE artist='Celine Dion';

