module.exports = app => {
const c_d = require("../controller/c_d.controller.js");
  
    var router = require("express").Router();
  
    // Create a new c_d
    router.post("/", c_d.create);
  
    // Retrieve all c_d
    router.get("/", c_d.findAll);
  
    // Retrieve all published c_d
    router.get("/published", c_d.findAllPublished);
  
    // Retrieve a single c_d with id
    router.get("/:id", c_d.findOne);
  
    // Update a c_d with id
    router.put("/:id", c_d.update);
  
    // Delete a c_d with id
    router.delete("/:id", c_d.delete);
  
    // Delete all c_d
    router.delete("/", c_d.deleteAll);
  
    app.use('/api/c_d', router);
  };

