import express from "express";
const port = 3000;

const app = express();

app.listen(port, () => {
    console.log(`Aplikasi berjalan dengan port : ${port} 😎`)
});

app.get("/", (req, res) => {
    res.send("Anjay berhasil");
});
