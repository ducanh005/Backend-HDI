require("dotenv").config();
// import express from 'express'
const express = require("express");
const configViewEngine = require('./config/viewEngine');
const app = express();
const webrouter = require("./routes/web");

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


configViewEngine(app);

app.use('/',webrouter)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
