import express from "express";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World.!");
});

app.get("/perkenalan", (req, res) => {
    res.send("<h1>Perkenelakan nama saya : Al Riansyah</h1>");
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan dengan port : ${port} 😎`)
});