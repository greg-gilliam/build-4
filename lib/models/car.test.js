const fs = require("fs");
const { request } = require("http");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const pool = require("../utils/pool");
const Car = require("./car");

describe("Car model", () => {
  beforeEach(() => {
    return pool.query();
  });

  it("should create a car", async () => { 
      .post("/api/cars")
      .send(newCar)
      .then((res) => {
        expect(res.body).toEqual({
          id: "1",
          make: "Ford",
          model: "Mustang",
          year: 1974,
        });
      });
  });

  it("should GET ALL cars", async () => {
    return request(Car).getHeader();
  });
  afterAll(() => {
    return pool.end();
  });
});
