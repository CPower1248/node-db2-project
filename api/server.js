const express = require("express")
const server = express()
server.use(express.json())

const { logger } = require("./middleware")
const carsRouter = require("./cars/cars-router")

server.use(logger)
server.use("/api/cars", carsRouter)

module.exports = server
