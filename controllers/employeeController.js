const Employee = require("../models/employeeModel");

// GET all employees
exports.getAllEmployees = async (req, res) => {
  Employee.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

// GET employee by ID
exports.getEmployeeById = (req, res) => {
  Employee.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

// ADD employee
exports.addEmployee = (req, res) => {
  Employee.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Employee added successfully" });
  });
};

// UPDATE employee
exports.updateEmployee = (req, res) => {
  Employee.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Employee updated successfully" });
  });
};

// DELETE employee
exports.deleteEmployee = (req, res) => {
  Employee.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Employee deleted successfully" });
  });
};
