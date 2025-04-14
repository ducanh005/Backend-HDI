require("dotenv").config();
// import express from 'express'
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const app = express();
const webrouter = require("./routes/web");
const connection = require("./config/database");

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

app.use("/", webrouter);

//test connection

const testDBConnection = async () => {
    try {
      const [rows, fields] = await connection.query("SELECT * FROM Users u");
      console.log("Kết nối DB thành công! Dữ liệu:");
    } catch (err) {
      console.error("Lỗi kết nối DB:", err);
    }
  };
  
  testDBConnection();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
