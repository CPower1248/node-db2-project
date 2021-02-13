exports.seed = function(knex) {
  return knex("cars").truncate()
    .then(() => {
      return knex("cars").insert([
        { VIN: "1111111111", make: "make1", model: "model1", mileage: 1, transmission: "", title_status: "" },
        { VIN: "2222222222", make: "make2", model: "model2", mileage: 2, transmission: "auto", title_status: "clean" },
        { VIN: "3333333333", make: "make3", model: "model3", mileage: 3, transmission: "manual", title_status: "salvage" }
      ])
    })
}
