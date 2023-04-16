const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "160150745-0Vc1",
  database: "SailorMoon"
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conexión a la base de datos exitosa");
});

app.get("/api/datos", (req, res) => {
  const sql = "SELECT nombre FROM personajes";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/api/datos/:nombre", (req, res) => {
  const sql = "SELECT * FROM personajes WHERE nombre = ?";
  db.query(sql, [req.params.nombre], (err, results) => {
    if (err) throw err;
    res.send(results[0]);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
