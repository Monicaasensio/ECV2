const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json())

let database;

(async () => {
    database = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "MLAcrochet"
    });
})();


app.get('/api/products', async function (req, res) {
    const results = await database.query("SELECT id, name, description, image, price, category FROM products");
        res.json(results[0]);
    })

app.listen(3001, () => {
    console.log("listening");
})