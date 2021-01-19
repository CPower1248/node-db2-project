const express = require("express")
const Car = require("./cars-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const data = await Car.findAll()
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Car.findById(id)
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
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
