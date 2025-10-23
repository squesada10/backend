import express from "express";

const app = express();

app.use(express.static("public"))

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next();
})

app.get('/about', (req, res) => {
  res.send("pagina about")
})

app.get('/', (req, res) => {
  res.send("hola")
})
const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
