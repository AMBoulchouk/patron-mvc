const express = require('express');
const mainRoutes = require('./routers/main')

const app = express();

app.use(express.static("public"))

app.use("/", mainRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo 🤙");
    console.log("http://localhost:3000");
})