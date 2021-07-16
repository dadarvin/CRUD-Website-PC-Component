const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Client } = require('pg');
const { response } = require('express');
const client = new Client({
    // Lengkapi koneksi dengan database
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "sbd_webapp",
});

client.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Database Connected');
});

//Create//
app.post('/tambah', function (req, res) {
    const query = // Gunakan query yang sesuai
        `INSERT INTO casing (name, form_factor, brand, price) VALUES ( 
            '${req.body.name}', '${req.body.form_factor}', '${req.body.brand}', 
            ${req.body.price})`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(`Data Casing berhasil diubah`);
    });
});

//Read//
app.get("/show", async (req, res) => {
    try {
        const query = await client.query("SELECT * FROM casing ORDER by id_case");
        res.json(query.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/editID/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const query = await client.query(`SELECT * FROM casing where id_case=$1`,
            [id]);
        res.json(query.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/getId", async (req, res) => {
    try {
        const query = await client.query(`SELECT * FROM casing WHERE id_case = ${req.body.id_case}`);
        res.json(query.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Update//
app.put('/ganti', function (req, res) {
    const query = // Gunakan query yang sesuai
        `UPDATE casing SET name='${req.body.name}', form_factor='${req.body.form_factor}'
        , brand = '${req.body.brand}', price=${req.body.price} WHERE id_case=${req.body.id_case}`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(`Data Casing berhasil diubah`);
    });
});

//Delete//
app.delete('/hapus', function (req, res) {
    const query = // Gunakan query yang sesuai
        `DELETE FROM casing where id_case=${req.body.id_case}`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(`Data Casing berhasil diubah`);
    });
});

app.listen(process.env.PORT, () => console.log('app is running'));
