import express from "express";
import usersRouter from "./routes/users.routes.js"


const app = express();
app.use(express.static("public"))

app.use('/users', usersRouter);
app.use('/usuarios', usersRouter);


const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
