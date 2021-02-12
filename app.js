const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let avengerArray = [
    { id: 1, name: "Iron Man" },
    { id: 2, name: "Thor" },
];


app.listen(port, () => {
    console.log("started");
});

app.get("/", (req, res) => {
    res.send("Avengers Data");
});

app.get("/api/avengers", (req, res) => {
    res.send(avengerArray)
});

app.get("/api/avengers/:id", (req, res) => {
    if (avengerArray[req.params.id]) {
        res.send(avengerArray[req.params.id]);
    }
    res.send("avenger not found");
});

app.put("/api/avengers/:id", (req, res) => {
    let requestedId = req.params.id;
    let avenger = avengerArray.find((avenger) => avenger.id == requestedId);
    if (!avenger) {
        return res.status(404).send("avenger not found");
    }
    avenger.name = req.body.name;
});

app.post("/api/avenger", (req, res) => {
    if (!req.body.name) {
        return res.status(404).send("name field required");
    }

    let newAvenger = {
        id: avengerArray.length + 1,
        name: req.body.name
    }
    avengerArray.push(newAvenger);
    return res.send(newAvenger);

});

app.delete("/api/avengers/:id", (req, res) => {
    let requestedId = req.params.id;
    let avenger = avengerArray.find((avenger) => avenger.id == requestedId);
    if (!avenger) {
        return res.status(404).send("avenger not found");
    }
    avengerArray.pop(avenger);
    return res.send("avenger deleted");
});