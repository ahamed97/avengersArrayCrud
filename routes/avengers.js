const express = require('express');
const router = express.Router();

let avengerArray = [
    { id: 1, name: "Iron Man" },
    { id: 2, name: "Thor" },
];

router.get("/", (req, res) => {
    res.send(avengerArray)
});

router.get("/:id", (req, res) => {
    if (avengerArray[req.params.id]) {
        res.send(avengerArray[req.params.id]);
    }
    res.send("avenger not found");
});

router.put("/:id", (req, res) => {
    let requestedId = req.params.id;
    let avenger = avengerArray.find((avenger) => avenger.id == requestedId);
    if (!avenger) {
        return res.status(404).send("avenger not found");
    }
    avenger.name = req.body.name;
});

router.post("/", (req, res) => {
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

router.delete("/:id", (req, res) => {
    let requestedId = req.params.id;
    let avenger = avengerArray.find((avenger) => avenger.id == requestedId);
    if (!avenger) {
        return res.status(404).send("avenger not found");
    }
    avengerArray.pop(avenger);
    return res.send("avenger deleted");
});

module.exports = router;