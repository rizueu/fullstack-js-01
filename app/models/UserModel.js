const Database = require("../config/Database");

class Users extends Database {
  constructor(table) {
    super(table);
    this.table = "users";
  }

  update(id, data = {}) {
    console.log("DATA UPDATE : ", data);
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM users WHERE id = ?";
      this.db.query(sql, id, (error, results) => {
        if (error) {
          reject(new Error(error));
        } else {
          const sql = "UPDATE users SET ? WHERE id = ?";
          const query = this.db.query(sql, [data, id], (error, results) => {
            return error ? reject(new Error(error)) : resolve(results);
          });
        }
      });
    });
  }
}

module.exports = new Users();
