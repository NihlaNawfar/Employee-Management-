require("dotenv").config();   // ADD THIS AT TOP

const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", employeeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
