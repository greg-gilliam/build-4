DROP TABLE IF EXISTS cars;

CREATE TABLE cars (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT CHECK (year > 999 AND year < 10000)
);

INSERT INTO cars (make, model, year)
VALUES ('Ford', 'Mustang', 1974), ('Chevy', 'Nova', 1968);
