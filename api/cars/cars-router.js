const express = require("express")
const Car = require("./cars-model")

const router = express.Router()
const { valCarId, valCar } = require("../middleware")

router.get("/", async (req, res, next) => {
  try {
    const data = await Car.findAll()
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", valCarId, (req, res, next) => {
  res.status(200).json({ data: req.car})
})

router.post("/", valCar, async (req, res, next) => {
  try {
    const { body } = req
    const data = await Car.insert(body)
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.use((error, req, res, next) => {
  res.status(500).json({ 
    error: "There was a problem communicating with the server",
    message: error.message,
    stack: error.stack
  })
})

module.exports = router
