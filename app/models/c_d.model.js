const sql = require("./db.js");

// constructor
const C_d = function(c_d) {
  this.Customer_name = c_d.Customer_name;
  this.Customer_address = c_d.Customer_address;
  this.Currentdate = c_d.Currentdate;
};

C_d.create = (newC_d, result) => {
    sql.query("INSERT INTO c_d SET ?", newC_d, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created c_d: ", { id: res.insertId, ...newC_d });
    result(null, { id: res.insertId, ...newC_d });
  });
};

C_d.findById = (id, result) => {
  sql.query(`SELECT * FROM c_d WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
        console.log("found p_d: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found p_d with the id
      result({ kind: "not_found" }, null);
    });
  };

  C_d.getAll = (Product_name, result) => {
    let query = "SELECT * FROM c_d";
  
    if (Customer_name) {
      query += ` WHERE Customer_name LIKE '%${Customer_name}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("c_d: ", res);
      result(null, res);
    });
  };

  C_d.getAllPublished = result => {
    sql.query("SELECT * FROM c_d WHERE published=true", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("c_d: ", res);
      result(null, res);
    });
  };

  C_d.updateById = (id, c_d, result) => {
    sql.query(
      "UPDATE c_d SET Customer_name = ?, Customer_address = ?, Currentdate = ? WHERE id = ?",
      [c_d.Customer_name, c_d.Customer_address, c_d.Currentdate, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found c_d with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated c_d: ", { id: id, ...c_d });
        result(null, { id: id, ...c_d });
      }
    );
  };

  C_d.remove = (id, result) => {
    sql.query("DELETE FROM c_d WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found p_d with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted c_d with id: ", id);
      result(null, res);
    });
  };
  
  C_d.removeAll = result => {
    sql.query("DELETE FROM c_d", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} c_d`);
      result(null, res);
    });
  }

  module.exports = C_d;