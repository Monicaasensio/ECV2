const express = require('express');
const mysql = require('mysql');

const app = express();

app.get('/',  (req, res) => {
    return res.json("From Backend");
})

app.listen(8081, () => {
    console.log("listening");
})