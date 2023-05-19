import express from "express";
import request from "supertest";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World.!");
});

app.get("/perkenalan", (req, res) => {
    res.send("<h1>Perkenelakan nama saya : Al Riansyah</h1>");
});

test("Hallo dunia", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hallo dunia>!");
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan dengan port : ${port} 😎`)
});