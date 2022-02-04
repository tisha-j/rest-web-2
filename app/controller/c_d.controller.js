const C_d = require("../models/c_d.model.js");

// Create and Save a new c_d
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a c_d
    const c_d = new C_d({
      Customer_name: req.body.Customer_name,
      Customer_address: req.body.Customer_address,
      Currentdate: req.body.Currentdate || false
    });
  
    // Save C_d in the database
    C_d.create(c_d, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the p_d."
        });
      else res.send(data);
    });
  };

  // Retrieve all c_d from the database (with condition).
exports.findAll = (req, res) => {
    const Customer_name = req.query.Customer_name;
  
    C_d.getAll(Customer_name, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
  
  exports.findAllPublished = (req, res) => {
    C_d.getAllPublished((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    C_d.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found C_d with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving C_d with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    C_d.updateById(
      req.params.id,
      new C_d(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found c_d with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating c_d with id " + req.params.id
            });
   exports.delete = (req, res) => {
  C_d.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found c_d with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete c_d with id " + req.params.id
        });
      }
    } else res.send({ message: `c_d was deleted successfully!` });
  });
};       }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    C_d.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found c_d with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete c_d with id " + req.params.id
          });
        }
      } else res.send({ message: `c_d was deleted successfully!` });
    });
  };

  exports.deleteAll = (req, res) => {
    C_d.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all data."
        });
      else res.send({ message: `All data was deleted successfully!` });
    });
  };

  