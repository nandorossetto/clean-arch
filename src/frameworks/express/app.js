require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const app = express();
// app.use(cors());
app.use(express.json());
// app.use("/");
app.listen(3000, () => {
    console.log("#### App is running, port:3000 ####");
});