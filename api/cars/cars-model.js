const db = require("../../data/db-config")

module.exports = {
  findAll,
  findById,
  insert
}

function findAll() {
  return db("cars")
}

function findById(id) {
  return db("cars").where({ id }).first()
}

function insert(body) {
  return db("cars").insert(body)
    .then(([id]) => {
      return db("cars").where({ id }).first()
    })
}
