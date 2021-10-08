const pool = require("../utils/pool");

module.exports = class Car {
  id;
  make;
  model;
  year;

  constructor(row) {
    this.id = this.id;
    this.make = this.make;
    this.model = this.model;
    this.year = this.year;
  }

  static async create({ make, model, year }) {
    const { rows } = await pool.query(
      `INSERT INTO cars (make, model, year)
        VALUES ($1, $2, $3)
        RETURNING *`,
      [make, model, year]
    );
    return new Car(rows[0]);
  }
};
