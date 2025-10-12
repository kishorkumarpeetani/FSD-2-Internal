const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("This is Home Page");
});

app.get('/about', (req, res) => {
    res.send("This is about page");
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`UserId is ${userId}`);
})

app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`name : ${name} age : ${age}`);
})

app.listen(3000, () => {
    console.log("Server at port 3000");
})