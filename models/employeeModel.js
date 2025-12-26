const db = require("../config/db");

// Get all employees
exports.getAll = (callback) => {
  db.query("SELECT * FROM employees", callback);
};

// Get employee by ID
exports.getById = (id, callback) => {
  db.query("SELECT * FROM employees WHERE emp_id = ?", [id], callback);
};

// Add employee
exports.create = (data, callback) => {
  const sql = `
    INSERT INTO employees (emp_name, dept_id, salary, email, city)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [
    data.emp_name,
    data.dept_id,
    data.salary,
    data.email,
    data.city
  ], callback);
};

// Update employee
exports.update = (id, data, callback) => {
  const sql = `
    UPDATE employees
    SET emp_name=?, dept_id=?, salary=?, email=?, city=?
    WHERE emp_id=?
  `;
  db.query(sql, [
    data.emp_name,
    data.dept_id,
    data.salary,
    data.email,
    data.city,
    id
  ], callback);
};

// Delete employee
exports.delete = (id, callback) => {
  db.query("DELETE FROM employees WHERE emp_id = ?", [id], callback);
};
