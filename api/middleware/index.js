const Car = require("../cars/cars-model")

function logger({ method, baseUrl, url }, res, next) {
  console.log("REQ METHOD: ", method)
  console.log("REQ URL: ", "http://localhost:5000", baseUrl, url)
  console.log("REQ TIMESTAMP: ", new Date())
  next()
}

async function valCarId(req, res, next) {
  try {
    const { id } = req.params
    const valCar = await Car.findById(id)
    if (!valCar) {
      res.status(400).json({ errorMessage: `The car with id ${id} could not be found` })
    } else {
      req.car = valCar
      next()
    }
  } catch (err) {
    next(err)
  }
}

function valCar(req, res, next) {
  const { VIN, make, model, mileage } = req.body
  if (!VIN || !make || !model || !mileage) {
    res.status(400).json({ errorMessage: "Missing required VIN, make, model and mileage" })
  } else {
    next()
  }
}

module.exports = { logger, valCarId, valCar }
